const MovieCard = ({ movie, onDetails }) => {
  const show = movie.show;
  const image = show.image?.original || show.image?.medium;

  return (
    <article className="group overflow-hidden rounded-xl border border-[#2a2825] bg-[#171615] transition duration-300 hover:-translate-y-1 hover:border-[#e8d5a3]/50 hover:shadow-xl hover:shadow-black/30">
      <div className="relative aspect-[2/3] overflow-hidden bg-[#24221f]">
        {image ? (
          <img
            src={image}
            alt={`${show.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[#9a958c]">
            No poster available
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-[#e8d5a3] backdrop-blur-sm">
          {show.rating?.average || "-"}
        </span>
      </div>

      <div className="flex min-h-40 flex-col p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-[#f5f2ea]">
          {show.name}
        </h3>
        <p className="mt-1 text-xs text-[#9a958c]">
          {show.premiered?.slice(0, 4) || "Release date unavailable"}
        </p>
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={() => onDetails(show)}
            className="w-full rounded-lg border border-[#3a3835] px-3 py-2 text-sm font-medium text-[#f5f2ea] transition-colors hover:border-[#e8d5a3] hover:text-[#e8d5a3]"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;