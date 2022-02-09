import "./searchbar.scss";

export default function Searchbar({searchParam, setSearchParam}) {
  return (
    <form className="form">
      <input type="search" placeholder="Search for a user"
      value={searchParam}
      onChange={(e) => setSearchParam(e.target.value)} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
}
