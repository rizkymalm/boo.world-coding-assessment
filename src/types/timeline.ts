export interface UserBadge {
  type: "mbti" | "zodiac" | "age"
  label: string
}

export interface TimelineItem {
  id: string
  user: {
    id: string
    name: string
    avatarUrl: string
    verified?: boolean
    badges: UserBadge[]
  }
  content: string
  createdAt: string // ISO date
  stats: {
    likes: number
    comments: number
    shares: number
  }
}
