import type { NextApiRequest, NextApiResponse } from "next"
import { mockUniverse } from "@/data/mockUniverse"
import { Universe } from "@/types/universe"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Universe[]>
) {
  const { limit, sort } = req.query

  let data = [...mockUniverse]

  if (sort === "souls") {
    data.sort((a, b) => b.souls - a.souls)
  }
  if (limit) {
    data = data.slice(0, Number(limit))
  }
  setTimeout(() => {
    res.status(200).json(data)
  }, 300)
}
