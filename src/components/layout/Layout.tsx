import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SectionMenu } from "../../data/constant/NavbarMenu";
import { modalImageStore } from "../../store/modalImagesStore";
import { searchValue } from "../../store/searchValueStore";
import FooterComponent from "../FooterComponent";
import ModalsImagesComponent from "../ModalsImagesComponent";
import NavbarComponent from "../NavbarComponent";
import SideBarComponent from "../SideBarComponent";

function CheckingNowPath(pathname: string) {
  const data = SectionMenu.filter((item) => item.Url == pathname);

  return data[0]?.Title;
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [ModalImages] = useAtom(modalImageStore);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [searchVal, setSearchValAtom] = useAtom(searchValue);

  const Path = CheckingNowPath(pathname);
  useEffect(() => {
    setSearchValAtom("");
  }, [setSearchValAtom, pathname]);

  console.log(isLoading);

  return (
    <>
      {ModalImages.length != 0 && (
        <ModalsImagesComponent Images={ModalImages} />
      )}
      {/* {isLoading ? (
        <div className="fixed w-full h-screen bg-[white] z-[1000] flex justify-center items- text-white">
          <Spinner color="primary" className="text-white" />
        </div>
      ) : null} */}
      <NavbarComponent />
      <div className="flex ">
        <div className="w-[12%]">
          <SideBarComponent Path={Path} />
        </div>
        <div className="w-[88%] p-3 ">
          <div className="">{children}</div>
        </div>
      </div>
      <div className="mt-6">
        <FooterComponent />
      </div>
    </>
  );
}
