import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchMovies = async (query = "") => {
    try {
      setLoading(true);
      setError("");

      const url = query.trim()
        ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
            query
          )}`
        : "https://api.tvmaze.com/shows";

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (query.trim()) {
        setMovies(data);
      } else {
        setMovies(
          data.map((show) => ({
            show,
          }))
        );
      }
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let cancelled = false;

    const loadMovies = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        if (!cancelled) {
          setMovies(data.map((show) => ({ show })));
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setMovies([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadMovies();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleSearch = () => {
    fetchMovies(searchQuery);
  };

  const closeModal = () => setSelectedMovie(null);

  return (
    <div className="min-h-screen bg-[#0f0f10] text-[#f5f2ea]">
      <section className="border-b border-[#2a2825] bg-[#151413]">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#e8d5a3]">
            The collection
          </p>
          <div className="mt-3 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl">
                Find something worth watching.
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#9a958c]">
                Browse popular series, discover hidden favorites, and build your next great night in.
              </p>
            </div>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handleSearch}
            />
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-14">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">{searchQuery ? `Results for “${searchQuery}”` : "Popular right now"}</h2>
            {!loading && !error && movies.length > 0 && (
              <p className="mt-1 text-sm text-[#7a756c]">{movies.length} titles to explore</p>
            )}
          </div>
          <span className="hidden rounded-full border border-[#3a3835] px-3 py-1 text-xs text-[#9a958c] sm:inline-flex">
            TV Maze collection
          </span>
        </div>

        {loading && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index} className="animate-pulse overflow-hidden rounded-xl border border-[#2a2825] bg-[#171615]">
                <div className="aspect-[2/3] bg-[#24221f]" />
                <div className="space-y-3 p-4">
                  <div className="h-4 rounded bg-[#2a2825]" />
                  <div className="h-3 w-2/3 rounded bg-[#2a2825]" />
                  <div className="h-9 rounded bg-[#24221f]" />
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-red-900/60 bg-red-950/20 px-6 py-10 text-center">
            <p className="font-medium text-red-200">We couldn’t load the collection.</p>
            <p className="mt-2 text-sm text-red-300/70">{error}</p>
            <button type="button" onClick={() => fetchMovies(searchQuery)} className="mt-5 rounded-lg bg-[#e8d5a3] px-4 py-2 text-sm font-semibold text-[#0f0f10]">
              Try again
            </button>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="rounded-xl border border-dashed border-[#3a3835] px-6 py-16 text-center">
            <p className="text-lg font-medium">No titles found</p>
            <p className="mt-2 text-sm text-[#9a958c]">Try a different search term.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
            {movies.map((movie) => (
              <MovieCard
                key={movie.show.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}
      </main>

      <MovieModal movie={selectedMovie} onClose={closeModal} />
    </div>
  );
};

export default Movies;