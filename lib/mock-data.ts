export type Category =
  | "bureau"
  | "confession"
  | "tea"
  | "bulletin"
  | "topic"
  | "class-xii";

export type Post = {
  id: string;
  category: Category;
  title: string;
  body: string;
  verified?: boolean;
  createdAt: string;
};

export const posts: Post[] = [
  {
    id: "1",
    category: "bureau",
    title: "The Great Cafeteria Wifi Outage",
    body: "For eleven minutes on Tuesday, nobody in the cafeteria could load anything. Several theories emerged. None were correct.",
    createdAt: "2h ago",
  },
  {
    id: "2",
    category: "tea",
    title: "Someone's been rearranging the Class 12 noticeboard",
    body: "Every Monday morning, one poster has quietly swapped places with another. Nobody's claimed it. Nobody's stopped it either.",
    verified: false,
    createdAt: "5h ago",
  },
  {
    id: "3",
    category: "confession",
    title: "I laughed during the fire drill",
    body: "Not the alarm. What happened right after. If you were there, you already know.",
    createdAt: "1d ago",
  },
  {
    id: "4",
    category: "bulletin",
    title: "Inter-house debate signups open Friday",
    body: "Topic to be announced Thursday morning. Sign-up sheet outside the staff room.",
    createdAt: "1d ago",
  },
];

export const topicOfTheDay = {
  question: "Best free period activity, no repeats allowed?",
  responses: 142,
};
