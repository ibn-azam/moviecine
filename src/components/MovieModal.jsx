const MovieModal = ({ movie, onClose }) => {
  if (!movie) {
    return null;
  }

  const poster = movie.image?.original || movie.image?.medium;
  const description = movie.summary?.replace(/<[^>]*>/g, "");

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#3a3835] bg-[#191817] p-6 shadow-2xl sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="movie-dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute right-5 top-5 rounded-full border border-[#3a3835] px-3 py-1 text-sm text-[#9a958c] hover:border-[#e8d5a3] hover:text-[#e8d5a3]"
        >
          Close
        </button>

        <div className="flex flex-col gap-6 sm:flex-row">
          {poster && (
            <img
              src={poster}
              alt={`${movie.name} poster`}
              className="aspect-[2/3] w-32 rounded-lg object-cover sm:w-40"
            />
          )}
          <div className="min-w-0 pt-8 sm:pt-2">
            <p className="text-sm font-medium uppercase tracking-widest text-[#e8d5a3]">
              Show details
            </p>
            <h2
              id="movie-dialog-title"
              className="mt-2 text-2xl font-bold text-[#f5f2ea]"
            >
              {movie.name}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#9a958c]">
              <span className="rounded-full bg-[#2a2825] px-3 py-1">
                Rating {movie.rating?.average || "N/A"}
              </span>
              <span className="rounded-full bg-[#2a2825] px-3 py-1">
                {movie.language || "Language N/A"}
              </span>
              <span className="rounded-full bg-[#2a2825] px-3 py-1">
                {movie.premiered || "Release N/A"}
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#b3ada3]">
              {description || "No description is available for this title."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
