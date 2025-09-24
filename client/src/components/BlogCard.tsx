import { formatDistance } from "date-fns";
import Tag from "./Tag";
import type { BlogCardType } from "../types/blogCard";

const BlogCard = ({
  id,
  createdAt,
  title,
  content,
  timeToRead,
  tags,
}: BlogCardType) => (
  <section
    id={`blog-card-${id}`}
    className="flex h-min w-full flex-col gap-2 overflow-hidden bg-gray-50 shadow-sm"
  >
    <div className="border-1 flex flex-col gap-3 border-gray-300 bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag.id} {...tag} />
        ))}
      </div>
      <p className="text-xs text-gray-600">{content}</p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <small>
          {formatDistance(createdAt, Date.now(), { addSuffix: true })}
        </small>
        <span>&middot;</span>
        <small>
          {timeToRead < 60
            ? `${timeToRead}secs read`
            : `${timeToRead / 60}min read`}
        </small>
      </div>
    </div>
  </section>
);

export default BlogCard;
