import BlogCard from "./BlogCard";
import Hero from "./Hero";
import { v4 as uuidv4 } from "uuid";
import Tag from "./Tag";
import { faker } from "@faker-js/faker";
import type { BlogCardType } from "../types/blogCard";

const tags = [
  { id: uuidv4(), name: "JavaScript", color: "bg text-yellow-800" },
  { id: uuidv4(), name: "React", color: "bg-blue-300 text-blue-800" },
  { id: uuidv4(), name: "CSS", color: "bg-purple-300 text-purple-800" },
  { id: uuidv4(), name: "HTML", color: "bg-red-300 text-red-800" },
  { id: uuidv4(), name: "Node.js", color: "bg-green-300 text-green-800" },
  { id: uuidv4(), name: "TypeScript", color: "bg-blue-100 text-blue-800" },
  {
    id: uuidv4(),
    name: "Web Development",
    color: "bg-indigo-300 text-indigo-800",
  },
  { id: uuidv4(), name: "Programming", color: "bg-gray-300 text-gray-800" },
  { id: uuidv4(), name: "Tech", color: "bg-teal-300 text-teal-800" },
];

const blogs: BlogCardType[] = Array(9)
  .fill("")
  .map(() => ({
    id: uuidv4(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(Math.round(Math.random() * 3 + 1)),
    createdAt: faker.date.past().toString(),
    timeToRead: 5 * 60,
    tags: [
      tags[Math.floor(Math.random() * tags.length)],
      tags[Math.floor((Math.random() * tags.length + 1) % tags.length)],
    ],
  }));

console.log(blogs);

const Home = () => (
  <main>
    <Hero />
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-gray-900">
          My latest blogs
        </h2>
        <p className="mt-2 max-w-2xl text-xl text-gray-600">
          The greatest manifestion of the All.
        </p>
        <nav className="mt-5 flex gap-2">
          <h3 className="text-normal font-medium text-gray-600">Filters: </h3>
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Tag key={tag.id} {...tag} isFilter />
            ))}
          </div>
        </nav>
        <div className="mt-8 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-6">
            {blogs
              .slice(0, Math.ceil(blogs.length / 3))
              .map((blog: BlogCardType) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
          </div>
          <div className="flex flex-col gap-6">
            {blogs
              .slice(
                Math.ceil(blogs.length / 3),
                Math.ceil((blogs.length / 3) * 2),
              )
              .map((blog: BlogCardType) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
          </div>
          <div className="flex flex-col gap-6">
            {blogs
              .slice(
                Math.ceil((blogs.length / 3) * 2),
                Math.ceil((blogs.length / 3) * 3),
              )
              .map((blog: BlogCardType) => (
                <BlogCard key={blog.id} {...blog} />
              ))}
          </div>
        </div>
      </div>
    </section>
    <section id="docs" className="bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900">Documentation</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Explore endpoints, examples, and error codes. More coming soon.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black"
          >
            Open Docs
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
