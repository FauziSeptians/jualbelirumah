import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SectionMenu } from "../../data/constant/NavbarMenu";
import {
  IdxModalAllImage,
  modalAllImageStore,
  modalImageStore,
} from "../../store/modalImagesStore";
import { searchValue } from "../../store/searchValueStore";
import FooterComponent from "../FooterComponent";
import ModalsAllImagesComponent from "../ModalsAllImagesComponent";
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
  const [ModalAllImages] = useAtom(modalAllImageStore);
  const [idxModalAllImage] = useAtom(IdxModalAllImage);

  console.log(ModalAllImages);

  console.log(idxModalAllImage);

  return (
    <>
      {ModalImages.length != 0 && (
        <ModalsImagesComponent Images={ModalImages} />
      )}
      {ModalAllImages.length != 0 && (
        <ModalsAllImagesComponent
          Images={ModalAllImages[idxModalAllImage]}
          lengthData={ModalAllImages.length - 1}
        />
      )}
      <NavbarComponent />
      <div className="flex ">
        <div className="md:flex hidden w-[12%] ">
          <SideBarComponent Path={Path} />
        </div>
        <div className="md:w-[88%] w-full p-3 ">
          <div className="">{children}</div>
        </div>
      </div>
      <div className="mt-6">
        <FooterComponent />
      </div>
    </>
  );
}
