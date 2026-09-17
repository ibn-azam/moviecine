import { motion } from "framer-motion";
import { Link } from "react-router";

const FEATURED = [
  {
    title: "Nocturne",
    genre: "Thriller",
    rating: "8.4",
    poster: "https://picsum.photos/seed/nocturne-movie/400/600",
  },
  {
    title: "Ashen Coast",
    genre: "Drama",
    rating: "7.9",
    poster: "https://picsum.photos/seed/ashen-coast-movie/400/600",
  },
  {
    title: "Paper Kingdoms",
    genre: "Fantasy",
    rating: "8.7",
    poster: "https://picsum.photos/seed/paper-kingdoms-movie/400/600",
  },
];

const FEATURED_MOVIE = FEATURED[0];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0f0f10]">
      {/* Background backdrop */}
      <div className="absolute inset-0">
        <img
          src={FEATURED_MOVIE.poster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full scale-110 object-cover object-center blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f10]/70 via-[#0f0f10]/90 to-[#0f0f10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f10] via-[#0f0f10]/40 to-transparent" />
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#e8d5a3]/10 blur-[120px] md:-top-56 md:h-[44rem] md:w-[44rem]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-20 sm:px-8 md:flex-row md:items-center md:gap-10 md:py-28 lg:py-32">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:w-1/2"
        >
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#e8d5a3]">
            Featured film · {FEATURED_MOVIE.genre} · ★ {FEATURED_MOVIE.rating}
          </span>

          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-[#f5f2ea] sm:text-5xl lg:text-6xl">
            {FEATURED_MOVIE.title}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[#9a958c] sm:text-lg">
            Search, sort and save movies and shows across every major platform.
            Build a watchlist that actually fits your taste.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/movies"
              className="rounded-lg bg-[#e8d5a3] px-6 py-3 text-center text-sm font-semibold text-[#0f0f10] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Movies
            </Link>
            <Link
              to="/watchlist"
              className="rounded-lg border border-[#3a3835] px-6 py-3 text-center text-sm font-semibold text-[#f5f2ea] transition-colors hover:border-[#e8d5a3]/60 hover:text-[#e8d5a3]"
            >
              My Watchlist
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-[#9a958c]">
            <div>
              <p className="text-xl font-semibold text-[#f5f2ea]">12K+</p>
              <p>Titles indexed</p>
            </div>
            <div className="h-8 w-px bg-[#2a2825]" />
            <div>
              <p className="text-xl font-semibold text-[#f5f2ea]">40+</p>
              <p>Genres covered</p>
            </div>
            <div className="h-8 w-px bg-[#2a2825]" />
            <div>
              <p className="text-xl font-semibold text-[#f5f2ea]">Free</p>
              <p>To get started</p>
            </div>
          </div>
        </motion.div>

        {/* Showcase */}
        <div className="relative md:w-1/2">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {FEATURED.map((movie, i) => (
              <motion.div
                key={movie.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.12,
                  ease: "easeOut",
                }}
                className={`group relative aspect-[2/3] overflow-hidden rounded-xl border border-[#2a2825] bg-gradient-to-br from-[#1a1a18] to-[#0f0f10] ${
                  i === 1 ? "translate-y-6 sm:translate-y-8" : ""
                }`}
              >
                <img
                  src={movie.poster}
                  alt={`${movie.title} poster`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4">
                  <span className="mb-1 inline-flex w-fit items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[11px] font-medium text-[#e8d5a3] backdrop-blur-sm">
                    ★ {movie.rating}
                  </span>
                  <p className="text-sm font-semibold text-[#f5f2ea] sm:text-base">
                    {movie.title}
                  </p>
                  <p className="text-xs text-[#9a958c]">{movie.genre}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8d5a3] text-[#0f0f10] shadow-lg">
                    ▶
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
