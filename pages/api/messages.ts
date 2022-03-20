import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnection from '../../dir/mongoDB/connection';
import { response } from '../../dir/types'
import DBer from '../../dir/mongoDB/dbAction';
import Messages from '../../dir/mongoDB/modals/Messages';

const handler = async (req: NextApiRequest, res: NextApiResponse<response>) => {
  const id = req.query.id instanceof Array ? req.query.id.join('') : req.query.id


  await dbConnection();

  try {
    switch (req.method) {

      case 'POST': {
        if (req.body) {
          const response = await DBer.POST(Messages, JSON.parse(req.body))
          if (response.error) throw response.error;
          return res.status(200).json(response);
        }
      }

      case 'GET': {
        const response = await DBer.GET(Messages, req.query)
        if (response.error) throw response.error;
        return res.status(200).json(response);
      }

      case 'DELETE': {
        if (req.query.id) {
          const response = await DBer.DELETE(Messages, id)
          if (response.error) throw response.error;
          return res.status(200).json(response);
        }
      }

      case 'PUT': {
        if (req.query.id && req.body) {
          const response = await DBer.PUT(Messages, JSON.parse(req.body), id)
          if (response.error) throw response.error;
          return res.status(200).json(response);
        }
      }

      default: {
        throw new Error(`${req.method} not supported`);
      }
    }
  } catch (err: any) {
    return res.status(400).json({ success: false, data: req.body || req.query, error: err.message })
  }
}
export default handler
