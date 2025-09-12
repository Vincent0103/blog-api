const Hero = () => (
  <section id="home" className="bg-gray-50">
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-gray-600 shadow">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Live Blog API
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        Build and explore your Blog API
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        Simple endpoints. Clean data models. Use this client to test requests
        and browse docs.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#features"
          className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          View Features
        </a>
        <a
          href="#docs"
          className="inline-flex items-center rounded-md bg-white px-5 py-3 font-medium text-gray-900 shadow ring-1 ring-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          API Docs
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
