import FeatureCard from "./FeatureCard";
import Hero from "./Hero";

const Home = () => (
  <main>
    <Hero />
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
        <p className="mt-2 max-w-2xl text-gray-600">
          Fast, typed, and predictable endpoints for posts, users, and comments.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard
            title="RESTful Endpoints"
            description="Standard CRUD routes with clear request/response shapes."
          />
          <FeatureCard
            title="Auth Ready"
            description="Token-based auth for protected actions and user scopes."
          />
          <FeatureCard
            title="Typed Responses"
            description="Consistent schemas for safer client integrations."
          />
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
