import { CiSearch } from "react-icons/ci";
import Results from "./Results";
import { departments, docs } from "../../data/data";
import Dropdown from "../Dropdown";

const SearchResults = () => {
  
  return (
    <div className="flex-1 px-2 max-md:px-0">
      <div className="flex items-start justify-end  gap-3 max-md:flex-col">
        <div className="flex border-1 rounded-md py-2 px-3  items-center max-md:w-full">
          <span className="w-7">
            <CiSearch />
          </span>
          <input
            className="flex-1 border-none outline-none"
            type="search"
            name="Search"
            placeholder="Search ..."
          />
        </div>
        <Dropdown items={departments}/>
      </div>

      <Results results={docs}/>
    </div>
  );
};

export default SearchResults;
