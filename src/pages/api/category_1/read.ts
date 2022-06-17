// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id: number,
  title: string
}

export default function readHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ id: 0, title : 'テスト0' });
}
