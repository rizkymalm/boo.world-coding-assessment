import type { NextApiRequest, NextApiResponse } from "next"
import { mockQuestion } from "@/data/mockQuestion"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(mockQuestion)
}
