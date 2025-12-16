import type { NextApiRequest, NextApiResponse } from "next";
import { mockTimeline } from "@/data/mockTimeline";
import { TimelineItem } from "@/types/timeline";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TimelineItem[]>
) {
  setTimeout(() => {
    res.status(200).json(mockTimeline);
  }, 400);
}
