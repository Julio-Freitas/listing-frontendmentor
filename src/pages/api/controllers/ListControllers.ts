import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseData, ResponseError } from 'types';

import data from '../data.json';

class ListController {
  async index(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData | ResponseError>
  ) {
    try {
      setTimeout(() => res.status(200).json({ data }), 500);
    } catch (error) {
      res.status(401).json({ error: 'Algum error' });
    }
  }
}

export default new ListController();
