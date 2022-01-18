import type { NextApiRequest, NextApiResponse } from 'next';
import { getAssets } from '@/services/coincap';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { limit = 10 },
  } = req;

  if (req.method === 'GET') {
    await getAssets({ limit })
      .then(({ data }) => {
        res.status(200).json(data);
      })
      .catch(({ err }) => {
        res.status(400).json({ err });
      });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
