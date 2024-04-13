import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SectionMenu } from "../../data/constant/NavbarMenu";
import {
  IdxModalAllImage,
  modalAllImageStore,
  modalImageStore,
} from "../../store/modalImagesStore";
import { PopupModals } from "../../store/popupModalsNavbar";
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
  const [, setSearchValAtom] = useAtom(searchValue);

  const Path = CheckingNowPath(pathname);
  useEffect(() => {
    setSearchValAtom("");
  }, [setSearchValAtom, pathname]);

  const [ModalAllImages] = useAtom(modalAllImageStore);
  const [idxModalAllImage] = useAtom(IdxModalAllImage);
  const [PopupModalMobile, setPopupModal] = useAtom(PopupModals);
  const [HoverKey, setHoverKey] = useState(Path);

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
      {PopupModalMobile ? (
        <div className="fixed w-full h-screen bg-white z-[1000] flex justify-center items-center">
          <div className="">
            {SectionMenu.map((item) =>
              HoverKey == item.Title ? (
                <Link to={item.Url}>
                  <div
                    key={item.Title}
                    className="cursor-pointer flex gap-2  py-2 items-center "
                    onMouseEnter={() => setHoverKey(item.Title)}
                    onMouseLeave={() => setHoverKey(Path)}
                    onClick={() => setPopupModal(false)}
                  >
                    <div className="relative w-[80px] h-[50px]">
                      <motion.div
                        className="absolute px-[20px] secondaryColor rounded-r-[100px] w-full h-full  py-3"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ type: "spring" }}
                      ></motion.div>
                      <div className="absolute top-[25%] left-[22px]">
                        <img src={item.Icon} width={22}></img>
                      </div>
                    </div>
                    <div>{item.Title}</div>
                  </div>
                </Link>
              ) : (
                <div
                  key={item.Title}
                  className="cursor-pointer flex gap-2 py-2 items-center"
                  onMouseEnter={() => setHoverKey(item.Title)}
                  onMouseLeave={() => setHoverKey(Path)}
                >
                  <div className="relative w-[80px] h-[50px] ">
                    {/* <div className="absolute px-[20px] bg-green-200 rounded-r-[100px] w-full h-full  py-3"></div> */}
                    <div className="absolute top-[25%] left-[22px]">
                      <img src={item.Icon} width={22}></img>
                    </div>
                  </div>
                  <div className="">{item.Title}</div>
                </div>
              )
            )}
          </div>
        </div>
      ) : null}
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
