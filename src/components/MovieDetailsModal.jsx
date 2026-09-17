const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <img
          className="modal-image"
          src={
            movie.image?.original ||
            movie.image?.medium ||
            "https://via.placeholder.com/500x700?text=No+Image"
          }
          alt={movie.name}
        />

        <div className="modal-info">
          <h2>{movie.name}</h2>

          <p>
            <strong>Rating:</strong> {movie.rating?.average || "N/A"}
          </p>

          <p>
            <strong>Release Date:</strong> {movie.premiered || "N/A"}
          </p>

          <p>
            <strong>Language:</strong> {movie.language || "N/A"}
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres?.length ? movie.genres.join(", ") : "N/A"}
          </p>

          <div className="summary">
            <strong>Overview:</strong>

            {movie.summary ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: movie.summary,
                }}
              />
            ) : (
              <p>No summary available.</p>
            )}
          </div>

          {movie.network && (
            <p>
              <strong>Network:</strong> {movie.network.name}
            </p>
          )}

          {movie.status && (
            <p>
              <strong>Status:</strong> {movie.status}
            </p>
          )}

          {movie.runtime && (
            <p>
              <strong>Runtime:</strong> {movie.runtime} minutes
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
