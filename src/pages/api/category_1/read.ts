// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/index"


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const category_1 = await prisma.category_1.findMany();
    res.status(200).json(category_1);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}
