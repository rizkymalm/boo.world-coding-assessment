import type { NextApiRequest, NextApiResponse } from "next"
import { mockQuestion } from "@/data/mockQuestion"
import { Question } from "@/types/question"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Question>
) {
  const randomIndex = Math.floor(
    Math.random() * mockQuestion.length
  )

  const randomQuestion = mockQuestion[randomIndex]

  // simulate network latency
  setTimeout(() => {
    res.status(200).json(randomQuestion)
  }, 300)
}
