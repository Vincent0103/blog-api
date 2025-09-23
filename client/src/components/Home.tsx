import BlogCard from "./BlogCard";
import Hero from "./Hero";
import { v4 as uuidv4 } from "uuid";
import Tag from "./Tag";

const tags = [
  { id: uuidv4(), name: "Creativity" },
  { id: uuidv4(), name: "Habits" },
  { id: uuidv4(), name: "Productivity" },
];

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
              <Tag {...tag} isFilter />
            ))}
          </div>
        </nav>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* FIXME: Make sure to change the id numbers to safely generated random strings */}
          <BlogCard id={1} />
          <BlogCard id={2} />
          <BlogCard id={3} />
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
