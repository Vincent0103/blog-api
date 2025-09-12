const Footer = () => (
  <footer className="border-t border-gray-200">
    <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-gray-600">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Blog API. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#docs" className="hover:text-gray-900">
            Docs
          </a>
          <a href="#contact" className="hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
