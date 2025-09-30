const Nav = () => (
  <header className="sticky top-0 z-30 border-b border-gray-200 bg-zinc-200/30 backdrop-blur-lg">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a
        href="#home"
        className="font-outfit text-lg font-semibold tracking-tight text-orange-900"
      >
        vinct's journal
      </a>
      <nav aria-label="Primary">
        <ul className="flex items-center gap-6 text-sm text-zinc-700">
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
            <a href="/login" className="hover:text-gray-900">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Nav;
