const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/",
    icon: (
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.79-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    ),
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: (
      <path d="M18.24 3h3.05l-6.67 7.62L22.5 21h-6.15l-4.82-6.3L5.98 21H2.93l7.14-8.15L2 3h6.3l4.36 5.76L18.24 3Zm-1.07 16.2h1.69L7.9 4.7H6.08l11.09 14.5Z" />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.16a4.9 4.9 0 0 0-1.16 1.77c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.16 1.77.55.56 1.11.9 1.77 1.16.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.16 4.9 4.9 0 0 0 1.16-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.34.47.18.8.4 1.15.75.35.35.57.68.75 1.15.13.36.3.88.34 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.34 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.13-.88.3-1.86.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.34a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.13-.36-.3-.88-.34-1.86C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.98.21-1.5.34-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.13.88-.3 1.86-.34C9.01 3.81 9.33 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.35-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    ),
  },
];

const SITE_LINKS = [
  { label: "Movies", href: "/movies" },
  { label: "TV Shows", href: "/tv" },
  { label: "My Watchlist", href: "/watchlist" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2825] bg-[#0f0f10]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8 md:flex-row md:items-start md:justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <a href="/" className="flex w-fit items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-[#FE9A00] text-sm font-bold text-[#0f0f10]">
              M
            </span>
            <span className="text-lg font-semibold tracking-tight text-[#f5f2ea]">
              MovieCine
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-[#9a958c]">
            Search, sort and save movies and shows across every major
            platform.
          </p>
        </div>

        {/* Site links */}
        <nav className="flex flex-col gap-3">
          <span className="text-sm font-medium text-[#f5f2ea]">Explore</span>
          <ul className="flex flex-col gap-2">
            {SITE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#9a958c] transition-colors hover:text-[#e8d5a3]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          <span className="text-sm font-medium text-[#f5f2ea]">Connect</span>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2a2825] text-[#9a958c] transition-colors hover:border-[#e8d5a3]/60 hover:text-[#e8d5a3]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#2a2825]">
        <div className="mx-auto max-w-6xl px-6 py-5 sm:px-8">
          <p className="text-xs text-[#7a756c]">
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}