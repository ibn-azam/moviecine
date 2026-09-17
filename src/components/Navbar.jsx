import { useState } from "react";
import { Link } from "react-router";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded bg-amber-500 text-sm font-bold text-zinc-950">
            M
          </span>
          <span className="text-lg font-semibold tracking-tight text-zinc-50 group-hover:text-amber-400 transition-colors">
            MovieCine
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-sm text-zinc-300 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            to="/movies"
            className="hidden rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-amber-400 transition-colors md:inline-block"
          >
            Explore Movies
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="text-zinc-300 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/movies"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md bg-amber-500 px-4 py-2 text-center text-sm font-medium text-zinc-950 hover:bg-amber-400 transition-colors"
              >
                Explore Movies
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}