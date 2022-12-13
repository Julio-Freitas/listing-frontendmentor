// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import ListControllers from './controllers/ListControllers';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ListControllers.index(req, res);
}
