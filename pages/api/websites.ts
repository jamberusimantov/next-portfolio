import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnection from '../../dir/mongoDB/connection';
import { response } from '../../dir/types'
import DBer from '../../dir/mongoDB/dbAction';
import Websites from '../../dir/mongoDB/modals/Websites';


const handler = async (req: NextApiRequest, res: NextApiResponse<response>) => {

  const mockWebsite = {
    name: '',
    description: '',
    url: '',
    image: '',
    _id: '',
  }

  await dbConnection();

  try {
    switch (req.method) {

      case 'POST': {
        const response = await DBer.POST(
          Websites,
          'website',
          mockWebsite,
          req.body ? JSON.parse(req.body) : {}
        )
        if (response.error) throw response.error;
        return res.status(200).json(response);
      }

      case 'GET': {
        const response = await DBer.GET(
          Websites,
          'website',
          mockWebsite,
          req.query
        )
        if (response.error) throw response.error;
        return res.status(200).json(response);
      }

      case 'DELETE': {
        const response = await DBer.DELETE(
          Websites,
          'website',
          mockWebsite,
          req.query?.id instanceof Array ? req.query?.id.join('') : req.query?.id
        )
        if (response.error) throw response.error;
        return res.status(200).json(response);
      }

      case 'PUT': {
        const response = await DBer.PUT(
          Websites,
          'website',
          mockWebsite,
          req.body ? JSON.parse(req.body) : {},
          req.query?.id instanceof Array ? req.query?.id.join('') : req.query?.id
        )
        if (response.error) throw response.error;
        return res.status(200).json(response);
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
