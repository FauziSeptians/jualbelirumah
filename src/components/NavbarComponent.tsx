import { useAtom } from "jotai";
import { KeyboardEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TitleMenu } from "../data/constant/NavbarMenu";
import { useCheckingSearchBar } from "../hooks/useCheckingSearchBar";
import { searchValue } from "../store/searchValueStore";
import PositiveWordComponent from "./PositiveWordComponent";
import SearchComponent from "./SearchComponent";

export default function NavbarComponent() {
  const [searchVal, setSearchVal] = useState("");
  const [, setSearchValAtom] = useAtom(searchValue);
  const navigate = useNavigate();
  function handleSearchSubmit(event: KeyboardEvent<HTMLInputElement>) {
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

  const path = useLocation();

  const { show } = useCheckingSearchBar(path.pathname);

  return (
    <div className=" w-full h-[90px] z-[1000]">
      <div className="w-full h-full    flex items-center ">
        <div className="cursor-pointer ml-[20px] w-[12%]">{TitleMenu}</div>
        {show && <SearchComponent />}
        {!show && <PositiveWordComponent />}
      </div>
    </div>
  );
}
