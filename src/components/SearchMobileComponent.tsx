import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchValue } from "../store/searchValueStore";

export default function SearchMobileComponent() {
  const [searchVal, setSearchVal] = useState("");
  const [, setSearchValAtom] = useAtom(searchValue);
  const navigate = useNavigate();
  function handleSearchSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      // Call the SearchSubmit function when the Enter key is pressed
      setSearchValAtom(searchVal);
      navigate("/Property?search=" + searchVal);
    }
  }

  useEffect(() => {
    const storedData = localStorage.getItem("searchVal");
    if (storedData) {
      setSearchVal(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="w-full md:hidden flex">
      <div className="bg-[#ffd34e]  border border-l border-x border-[#00000016] flex items-center px-3">
        <img src="/search.png" width={22}></img>
      </div>

      <input
        type="text"
        className="py-1 px-4 w-[700px] rounded-r-[100px] border border-x border-r border-[#00000016] bg-[#f1f3f9] "
        placeholder="Search your dream house"
        name="search"
        onChange={(e) => setSearchVal(e.target.value)}
        onKeyDown={handleSearchSubmit}
        value={searchVal ? searchVal : ""}
      />
    </div>
  );
}
