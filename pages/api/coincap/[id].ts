import type { NextApiRequest, NextApiResponse } from 'next';
import { getAsset } from '@/services/coincap';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const assetId = req.query.id;

  if (req.method === 'GET') {
    await getAsset(assetId)
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
