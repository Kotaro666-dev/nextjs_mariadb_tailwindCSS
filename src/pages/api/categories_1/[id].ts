// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../../lib/index"
import { ApiResponse, Category_1_Data } from '../../../types/types'

type Response = ApiResponse<Category_1_Data[] | Category_1_Data>

const errorResponse: Response = {
  status: "ERROR", code: 500,
  message: "Error occured."
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  switch (req.method) {
    case "GET":
      handleGetRequest(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse<Response>) {
    const { id } = req.query;
    try {
        const result = await prisma.category_1.findUnique({
            where: { id: Number(id) }
        });
        if (result == null) {
            res.status(500).json(errorResponse);
        } else {
            res.status(200).json({status: "SUCCESS", data: result });
        }
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log(err);
            res.status(500).json(errorResponse);
        }
    }
}