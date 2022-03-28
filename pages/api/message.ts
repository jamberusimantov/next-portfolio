import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnection from '../../dir/mongoDB/connection';
import DBer from '../../dir/mongoDB/dbAction';
import Messages from '../../dir/mongoDB/modals/Messages';
import nodemailer from 'nodemailer'
import getConfig from 'next/config';
import emailTemplate from '../../dir/emailTemplate'


type request = {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

type response = {
    success: boolean,
    data: any,
    error?: string,
    message?: string,
}

type emailProps = request & { actionURL: string }

const handler = async (req: NextApiRequest, res: NextApiResponse<response>) => {

    const body = req.body && JSON.parse(req.body);
    const id = req.query.id instanceof Array ? req.query.id.join('') : req.query.id
    const sendEmail = async (request: emailProps) => {
        const { serverRuntimeConfig } = getConfig();
        try {
            if (request.email && request.message && request.name && request.phone && request.subject && request.actionURL) {
                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    auth: {
                        user: serverRuntimeConfig.emailUser,
                        pass: serverRuntimeConfig.emailPass,
                    },
                });
                console.log(`sending email from ${request.name} <${request.email}>`);
                const response = await transporter.sendMail({
                    to: serverRuntimeConfig.emailUser,
                    replyTo: `"${request.name} 👻" <${request.email}>`,
                    subject: request.subject,
                    text: `${request.phone}--${request.message}`,
                    html: emailTemplate(request),
                });
                if (!response) throw new Error('EMAIL returned falsy');
                if (!Object.entries(response).length) throw new Error('EMAIL returned empty');
                if (response.rejected.length) throw new Error(response.response);
                console.log(`sent email from  ${request.name} <${response.envelope.from}>`);
                return ({
                    success: true,
                    data: response,
                    message: `sent email from ${response.envelope.from}`,
                })
            }
            throw new Error('EMAIL aborted, missing params for action');
        } catch (error: any) {
            console.log(error.message);
            return ({
                success: false,
                data: request,
                error,
            })
        }
    }

    try {
        await dbConnection();
        switch (req.method) {
            case 'POST': {
                if (body.email && body.name && body.message) {
                    body.subject = body.subject || 'אשמח לשמוע עוד'
                    body.phone = body.phone || 'לא צוין טלפון'
                    const dbResponse = await DBer.POST(Messages, body)
                    if (!dbResponse.id) throw dbResponse.error;
                    const basePath = process.env.NODE_ENV === "production"
                        ? `https://portfoio-simantov.herokuapp.com`
                        : `http://localhost:3000`;
                    const actionURL = `${basePath}/messages/changeToSeen?id=${dbResponse.id}`
                    const mailResponse = await sendEmail({ ...body, actionURL });
                    if (mailResponse.error) throw mailResponse.error;
                    return res.status(200).json(mailResponse)
                }
                throw new Error(`${req.method} aborted, missing params for action`);
            }
            case 'PUT': {
                if (id && body) {
                    const response = await DBer.PUT(Messages, body, id)
                    if (!response.id) throw response.error;
                    return res.status(200).json(response);
                }
                throw new Error(`${req.method} aborted, missing params for action`);
            }
            default: {
                throw new Error(`${req.method} not supported`);
            }
        }
    } catch (err: any) {
        return res.status(400).json({ success: false, data: body, error: err.message })
    }
}
export default handler