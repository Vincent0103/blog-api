import { v4 as uuidv4 } from "uuid";

interface BlogCardProps {
  id: number;
  img: {
    src: string;
    alt: string;
  };
}

const tags = [
  { id: uuidv4(), name: "Creativity" },
  { id: uuidv4(), name: "Habits" },
  { id: uuidv4(), name: "Productivity" },
];

const BlogCard = ({ id, img }: BlogCardProps) => (
  <section
    id={`blog-card-${id}`}
    className="flex w-full flex-col gap-2 overflow-hidden bg-gray-50 shadow-sm"
  >
    <div className="border-1 flex flex-col gap-2 border-gray-300 bg-gray-50 p-4">
      <h1 className="text-2xl font-semibold">Building a creative habit</h1>
      <div className="flex flex-wrap gap-2">
        {tags.map(({ id, name }) => (
          <span
            key={id}
            className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700"
          >
            {name}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit delectus
        explicabo consequuntur, inventore unde voluptatum eos libero quaerat.
        Voluptas iste eligendi eos voluptatibus labore totam velit inventore
        voluptatum ullam odit.
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <small>Aug 3, 2025</small>
        <span>&middot;</span>
        <small>6 min read</small>
      </div>
    </div>
  </section>
);

export default BlogCard;
