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

// No seed/demo posts. Real content will come from Supabase once wired in.
export const posts: Post[] = [];

export const topicOfTheDay = {
  question: "",
  responses: 0,
};
