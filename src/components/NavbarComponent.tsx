import { useLocation } from "react-router-dom";
import { TitleMenu } from "../data/constant/NavbarMenu";
import { useCheckingSearchBar } from "../hooks/useCheckingSearchBar";
import PositiveWordComponent from "./PositiveWordComponent";
import SearchComponent from "./SearchComponent";
import { SectionNavbarMobileComponent } from "./SectionNavbarMobileComponent";

export default function NavbarComponent() {
  const path = useLocation();

  const { show } = useCheckingSearchBar(path.pathname);

  return (
    <div className=" w-full h-[90px] z-[1000]">
      <div className="w-full h-full flex items-center md:justify-start justify-between">
        <div className="cursor-pointer ml-[20px] w-[12%]">{TitleMenu}</div>
        {show && <SearchComponent />}
        {!show && <PositiveWordComponent />}
        <SectionNavbarMobileComponent />
      </div>
    </div>
  );
}
