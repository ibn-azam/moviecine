const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-2xl items-center gap-2 rounded-xl border border-[#3a3835] bg-[#191817] p-2 shadow-2xl shadow-black/20 focus-within:border-[#e8d5a3]/70"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="ml-3 h-5 w-5 shrink-0 text-[#9a958c]"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
      <input
        type="search"
        aria-label="Search movies and shows"
        placeholder="Search movies and shows..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-[#f5f2ea] outline-none placeholder:text-[#7a756c]"
      />
      <button
        type="submit"
        className="rounded-lg bg-[#e8d5a3] px-5 py-2.5 text-sm font-semibold text-[#0f0f10] transition-colors hover:bg-[#f5e5bb]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
