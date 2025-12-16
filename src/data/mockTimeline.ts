import { TimelineItem } from "@/types/timeline";

export const mockTimeline: TimelineItem[] = [
  {
    id: "t1",
    user: {
      id: "u1",
      name: "Brzostek",
      avatarUrl: "/avatars/1.jpg",
      verified: true,
      badges: [
        { type: "mbti", label: "ESFP" },
        { type: "zodiac", label: "Cancer" },
        { type: "age", label: "8–9" },
      ],
    },
    content:
      "Hello, you are cool and very nice, of course you can go on a date",
    createdAt: "2025-12-02T10:00:00Z",
    stats: {
      likes: 0,
      comments: 0,
      shares: 0,
    },
  },
  {
    id: "t2",
    user: {
      id: "u2",
      name: "Erika",
      avatarUrl: "/avatars/2.jpg",
      verified: true,
      badges: [
        { type: "mbti", label: "INTJ" },
        { type: "zodiac", label: "Taurus" },
        { type: "age", label: "8–7" },
      ],
    },
    content:
      "Adventure? I want interest adventure, not hurting adventure and for peace yes. But I don't want peace who make me boring like we don't do anything",
    createdAt: "2025-12-01T09:30:00Z",
    stats: {
      likes: 0,
      comments: 0,
      shares: 0,
    },
  },
  {
    id: "t3",
    user: {
      id: "u3",
      name: "carin",
      avatarUrl: "/avatars/3.jpg",
      badges: [
        { type: "mbti", label: "ESFJ" },
        { type: "zodiac", label: "Gemini" },
        { type: "age", label: "2–1" },
      ],
    },
    content: "I dont know",
    createdAt: "2025-11-30T08:15:00Z",
    stats: {
      likes: 0,
      comments: 0,
      shares: 0,
    },
  },
  {
    id: "t4",
    user: {
      id: "u4",
      name: "Alex",
      avatarUrl: "/avatars/4.jpg",
      badges: [
        { type: "mbti", label: "INFJ" },
        { type: "zodiac", label: "Pisces" },
        { type: "age", label: "5–4" },
      ],
    },
    content:
      "Sometimes peace is not about doing nothing, but feeling safe with someone.",
    createdAt: "2025-11-29T14:45:00Z",
    stats: {
      likes: 12,
      comments: 3,
      shares: 1,
    },
  },
  {
    id: "t5",
    user: {
      id: "u5",
      name: "Maya",
      avatarUrl: "/avatars/5.jpg",
      verified: true,
      badges: [
        { type: "mbti", label: "ENFP" },
        { type: "zodiac", label: "Leo" },
        { type: "age", label: "6–5" },
      ],
    },
    content:
      "I could talk about books, psychology, and random midnight thoughts for hours.",
    createdAt: "2025-11-28T21:00:00Z",
    stats: {
      likes: 45,
      comments: 12,
      shares: 6,
    },
  },
  {
    id: "t6",
    user: {
      id: "u6",
      name: "Daniel",
      avatarUrl: "/avatars/6.jpg",
      badges: [
        { type: "mbti", label: "ISTP" },
        { type: "zodiac", label: "Aries" },
        { type: "age", label: "4–3" },
      ],
    },
    content:
      "Sunset feels like closure, sunrise feels like pressure. I choose sunset.",
    createdAt: "2025-11-27T18:20:00Z",
    stats: {
      likes: 31,
      comments: 9,
      shares: 4,
    },
  },
  {
    id: "t7",
    user: {
      id: "u7",
      name: "Lina",
      avatarUrl: "/avatars/7.jpg",
      badges: [
        { type: "mbti", label: "ISFJ" },
        { type: "zodiac", label: "Virgo" },
        { type: "age", label: "3–2" },
      ],
    },
    content:
      "Stability doesn't mean boring. It means you can breathe without fear.",
    createdAt: "2025-11-26T11:10:00Z",
    stats: {
      likes: 58,
      comments: 21,
      shares: 10,
    },
  },
  {
    id: "t8",
    user: {
      id: "u8",
      name: "Kevin",
      avatarUrl: "/avatars/8.jpg",
      badges: [
        { type: "mbti", label: "ENTP" },
        { type: "zodiac", label: "Sagittarius" },
        { type: "age", label: "7–6" },
      ],
    },
    content:
      "If I could master any instrument instantly, it would be piano. Infinite emotions.",
    createdAt: "2025-11-25T16:40:00Z",
    stats: {
      likes: 67,
      comments: 18,
      shares: 7,
    },
  },
  {
    id: "t9",
    user: {
      id: "u9",
      name: "Nadia",
      avatarUrl: "/avatars/9.jpg",
      verified: true,
      badges: [
        { type: "mbti", label: "INTP" },
        { type: "zodiac", label: "Aquarius" },
        { type: "age", label: "9–8" },
      ],
    },
    content:
      "I love deep conversations, but only with people who actually listen.",
    createdAt: "2025-11-24T13:00:00Z",
    stats: {
      likes: 102,
      comments: 34,
      shares: 15,
    },
  },
  {
    id: "t10",
    user: {
      id: "u10",
      name: "Ryo",
      avatarUrl: "/avatars/10.jpg",
      badges: [
        { type: "mbti", label: "ISTJ" },
        { type: "zodiac", label: "Capricorn" },
        { type: "age", label: "5–4" },
      ],
    },
    content:
      "Peace is not the absence of problems, but the ability to handle them together.",
    createdAt: "2025-11-23T19:50:00Z",
    stats: {
      likes: 76,
      comments: 19,
      shares: 8,
    },
  },
];
