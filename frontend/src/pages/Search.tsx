import { useSearchContext } from "../context/SearchContext";

const Search = () => {
  const search = useSearchContext();
  console.log(search);

  return <>Search Page</>;
};

export default Search;
