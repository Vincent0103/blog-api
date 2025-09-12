const Nav = () => (
  <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a
        href="#home"
        className="text-lg font-semibold tracking-tight text-gray-900"
      >
        Blog API
      </a>
      <nav aria-label="Primary">
        <ul className="flex items-center gap-6 text-sm text-gray-700">
          <li>
            <a href="#features" className="hover:text-gray-900">
              Features
            </a>
          </li>
          <li>
            <a href="#docs" className="hover:text-gray-900">
              Docs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
