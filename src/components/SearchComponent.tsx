import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchValue } from "../store/searchValueStore";

export default function SearchComponent() {
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
    <div className="hidden w-[88%] md:flex">
      <div className="flex items-center border border-x border-l border-[#00000016] bg-[#ffd34e] px-3">
        <img src="/search.png" width={22}></img>
      </div>

      <input
        type="text"
        className="w-[700px] rounded-r-[100px] border border-x border-r border-[#00000016] bg-[#f1f3f9] px-4 py-1"
        placeholder="Search your dream house"
        name="search"
        onChange={(e) => setSearchVal(e.target.value)}
        onKeyDown={handleSearchSubmit}
        value={searchVal ? searchVal : ""}
      />
    </div>
  );
}
