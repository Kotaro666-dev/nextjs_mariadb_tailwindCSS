// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from "../../lib/index"
import { ApiResponse, Category_1_Data } from '../../types/types'

type Response = ApiResponse<Category_1_Data[]>

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
      handleGetRequest(res);
      break;
    case "POST":
      handlePostRequest(req, res);
      break;
    case "PUT":
      handlePutRequest(req, res);
      break;
    case "DELETE":
      handleDeleteRequest(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}

async function handleGetRequest(res: NextApiResponse<Response>) {
  try {
    const result = await prisma.category_1.findMany();
    res.status(200).json({status: "SUCCESS", data: result });
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      res.status(500).json(errorResponse);
    }
  }
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const { title } = req.body;
    await prisma.category_1.create({
      data: {
        title: title,
      },
    });
    res.status(200).json({status: "SUCCESS"});
  } catch(err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      res.status(500).json(errorResponse);
    }
  }
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const { id, title } = req.body;
    await prisma.category_1.update({
      data: { title: title },
      where: { id: id}
    });
    res.status(200).json({status: "SUCCESS"});
  } catch(err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      res.status(500).json(errorResponse);
    }
  }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse<Response>) {
  try {
    const { id } = req.body;
    await prisma.category_1.delete({
      where: { id: id}
    });
    res.status(200).json({status: "SUCCESS"});
  } catch(err: unknown) {
    if (err instanceof Error) {
      console.log(err);
      res.status(500).json(errorResponse);
    }
  }
}