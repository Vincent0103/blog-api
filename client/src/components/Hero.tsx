import { ArrowDown } from "lucide-react";
import Star from "../assets/star.svg?react";

const Hero = () => (
  <section id="home" className="relative overflow-hidden bg-gray-50">
    <div
      aria-hidden="true"
      // className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom,rgba(251,146,60,0.3)_0%,transparent_70%)]"
      className="border-b-1 pointer-events-none absolute inset-0 z-0 border-gray-950 bg-[radial-gradient(circle_at_bottom,rgba(253,186,116,0.3)_0%,transparent_70%)]"
    />
    <div className="relative z-10 mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        The articles that don't sound{" "}
        <i className="font-roboto-mono">generic</i>
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        It's not just about coding, it's pure wisdom.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#features"
          className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 font-medium text-white shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <ArrowDown className="mr-2 size-5" />
          Check it out!
        </a>
        <a
          href="#docs"
          className="inline-flex items-center rounded-md bg-white px-5 py-3 font-medium text-gray-900 shadow ring-1 ring-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          Open a random blog
        </a>
        <div className="right-1/7 absolute bottom-0 flex font-light font-outfit items-end opacity-80">
          <div className="px-2 py-1 flex gap-1">
            <p>more about me on</p>
            <a
              href="https://vinct.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline focus:outline-none"
            >
              vinct.me
            </a>
          </div>
          <Star className="absolute size-6 bottom-9 right-3" />
          <Star className="absolute size-4 bottom-6 -right-2" />
          <Star className="absolute size-3 bottom-2 -right-6" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
