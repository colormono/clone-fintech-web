// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Person, people } from './data';

export default function handler(req: NextApiRequest, res: NextApiResponse<Person>) {
  if (req.method === 'POST') {
    // Process a POST request
    res.status(200).json(people);
  } else {
    // Handle any other HTTP method
  }
}
