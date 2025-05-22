const Search = () => {
  return (
    <div className="hidden md:flex flex-1">
      <div className="flex w-full h-10">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 border border-r-0 border-gray-300 rounded-l-full outline-none"
        /> 
        <button className="px-4 border border-l-0 border-gray-300 rounded-r-full cursor-pointer">
          Ara
        </button>
      </div>
    </div>
  );
};

export default Search;

//focus:outline-none focus:ring-2 focus:ring-orange-500