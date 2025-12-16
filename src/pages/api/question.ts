import type { NextApiRequest, NextApiResponse } from "next";
import { mockQuestion } from "@/data/mockQuestion";
import { Question } from "@/types/question";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question[]>
) {
  const { limit } = req.query;

  let data = [...mockQuestion];

  if (limit) {
    data = data.slice(0, Number(limit));
  }

  setTimeout(() => {
    res.status(200).json(data);
  }, 300);
}
