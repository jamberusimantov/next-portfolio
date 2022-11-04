import type { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import nodemailer from 'nodemailer';
import Messages from '../../DB/modals/Messages';
import DB from '../../DB/dbAction';
import { iResponse } from "../../DB/dbAction";


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<iResponse & { data: SMTPTransport.SentMessageInfo | iCustomEmailProps }>
) => {
    const body = JSON.parse(req.body);
    try {
        let dbResponse;
        switch (req.method) {
            case 'POST': {
                const isValid = !!body.email && !!body.name && !!body.message;
                if (!isValid) throw new Error(`${req.method} aborted, missing params for action`);
                body.subject = body.subject ?? 'אשמח לשמוע עוד';
                body.phone = body.phone ?? 'לא צוין טלפון';
                dbResponse = await DB({ collection: Messages, data: body, method: req.method });
                if (!dbResponse.success) throw dbResponse.error;
                const mailResponse = await sendEmail(body);
                if (mailResponse.error) throw mailResponse.error;
                return res.status(200).json(mailResponse);
            }
            default: throw new Error(`${req.method} not supported`);
        }
    }
    catch (err: any) { return res.status(400).json({ success: false, data: body, error: err.message }) };
}

interface iCustomEmailProps {
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string,
};

export const customEmail = (props: iCustomEmailProps): string => {
    return (`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US"><head><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta name="x-apple-disable-message-reformatting" /><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="color-scheme" content="light dark" /><meta name="supported-color-schemes" content="light dark" /><title></title><style type="text/css" rel="stylesheet" media="all">@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
    body {width: 100% !important;height: 100%;margin: 0;-webkit-text-size-adjust: none;}a {color: #3869D4;}td {word-break: break-word;}body,td,th {font-family: "Nunito Sans", Helvetica, Arial, sans-serif;}h1 {margin-top: 0;color: #333333;font-size: 22px;font-weight: bold;text-align: right;}td,th {font-size: 16px;}p,p.sub {font-size: 13px;}.align-center {text-align: center;}.button {background-color: #3869D4;border-top: 10px solid #3869D4;border-right: 18px solid #3869D4;border-bottom: 10px solid #3869D4;border-left: 18px solid #3869D4;display: inline-block;color: #FFF;text-decoration: none;border-radius: 3px;box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);-webkit-text-size-adjust: none;box-sizing: border-box;} .button--green {background-color: #22BC66;border-top: 10px solid #22BC66;border-right: 18px solid #22BC66;border-bottom: 10px solid #22BC66;border-left: 18px solid #22BC66;}@media only screen and (max-width: 500px) {.button {width: 100% !important;text-align: center !important;}}body {background-color: #F4F4F7;color: #51545E;}p {color: #51545E;}p.sub {color: #6B6E76;}.email-wrapper {width: 100%;margin: 0;padding: 0;-premailer-width: 100%;-premailer-cellpadding: 0;-premailer-cellspacing: 0;background-color: #F4F4F7;}.email-content {width: 100%;margin: 0;padding: 0;-premailer-width: 100%;-premailer-cellpadding: 0;-premailer-cellspacing: 0;}.email-masthead {padding: 25px 0;text-align: center;}.email-masthead_name {font-size: 16px;font-weight: bold;color: #A8AAAF;text-decoration: none;text-shadow: 0 1px 0 white;}.email-body {width: 100%;margin: 0;padding: 0;-premailer-width: 100%;-premailer-cellpadding: 0;-premailer-cellspacing: 0;background-color: #FFFFFF;}.email-body_inner {width: 570px;margin: 0 auto;padding: 0;-premailer-width: 570px;-premailer-cellpadding: 0;-premailer-cellspacing: 0;background-color: #FFFFFF;}.email-footer {width: 570px;margin: 0 auto;padding: 0;-premailer-width: 570px;-premailer-cellpadding: 0;-premailer-cellspacing: 0;text-align: center;}.email-footer p {color: #6B6E76;}.body-action {width: 100%;margin: 30px auto;padding: 0;-premailer-width: 100%;-premailer-cellpadding: 0;-premailer-cellspacing: 0;text-align: center;}.body-sub {margin-top: 25px;padding-top: 25px;border-top: 1px solid #EAEAEC;}.content-cell {padding: 35px;}@media only screen and (max-width: 600px) {.email-body_inner,.email-footer {width: 100% !important;}}@media (prefers-color-scheme: dark) {body,.email-body,.email-body_inner,.email-content,.email-wrapper,.email-masthead,.email-footer {background-color: #333333 !important;color: #FFF !important;}p,h1,span {color: #FFF !important;}.email-masthead_name {text-shadow: none !important;}}:root {color-scheme: light dark;supported-color-schemes: light dark;}</style></head><body><table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation"><tr><td align="center"><table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation"><tr><td class="email-masthead"><a href="https://portfoio-simantov.herokuapp.com" class="f-fallback email-masthead_name">אתר הבית</a></td></tr><tr><td class="email-body" width="100%" cellpadding="0" cellspacing="0"><table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"><tr><td class="content-cell"><div class="f-fallback"><h1>היי סימן טוב,</h1><p>התקבלה הודעה חדשה עבורך באתר הבית שלך.</p><p>Email: ${props.email}</p><p>Phone: ${props.phone}</p><p>Name: ${props.name}</p><p>Subject: ${props.subject}</p><p>Message: ${props.message}</p><p>תודה והמשך יום קסום,<br>צוות אתר הבית.</p><table class="body-sub" role="presentation"><tr><td><p class="f-fallback sub">https://portfoio-simantov.herokuapp.com</p></td></tr></table></div></td></tr></table></td></tr><tr><td><table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"><tr><td class="content-cell" align="center"><p class="f-fallback sub align-center">&copy; 2022 אתר הבית. All rights reserved.</p></td></tr></table></td></tr></table></td></tr></table></body></html>`);
};

const sendEmail = async (props: iCustomEmailProps) => {
    const { email, message, name, phone, subject } = props;
    if (!email || !message || !name || !phone || !subject) throw new Error('EMAIL aborted, missing params for action');
    try {
        const { serverRuntimeConfig } = getConfig();
        const transporterConfig = {
            host: serverRuntimeConfig.transporterHost,
            auth: {
                user: serverRuntimeConfig.transporterUser,
                pass: serverRuntimeConfig.transporterPassword
            }
        };
        const envelopeConfig = {
            to: serverRuntimeConfig.email,
            replyTo: `"${name} 👻" <${email}>`,
            subject: subject,
            text: `<${phone}> ${message}`,
            html: customEmail(props),
        };
        const transporter = nodemailer.createTransport(transporterConfig);
        const response = await transporter.sendMail(envelopeConfig);
        if (!response) throw new Error('EMAIL returned falsy');
        if (!response.accepted.length) throw new Error(response.response);
        console.log("Email: " + email + " response was: " + response.response);
        return ({
            success: true,
            data: response,
            message: `sent email from ${response.envelope.from}`
        });
    } catch (err: any) { return ({ success: false, data: props, error: err.message }) };
}


export default handler; 