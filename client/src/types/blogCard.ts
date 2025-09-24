import type { TagType } from "./tag";

export interface BlogCardType {
  id: string | number;
  createdAt: string;
  title: string;
  content: string;
  timeToRead: number;
  tags: TagType[];
}
