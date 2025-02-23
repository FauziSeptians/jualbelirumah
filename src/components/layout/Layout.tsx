import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SectionMenu } from "../../data/navbarMenu";
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
    <div className="bg-neutral w-full h-screen">
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
        <div className="fixed z-[1000] flex h-screen w-full items-center justify-center bg-neutral">
          <div className="">
            {SectionMenu.map((item) =>
              HoverKey == item.Title ? (
                <Link to={item.Url}>
                  <div
                    key={item.Title}
                    className="flex cursor-pointer items-center gap-2 py-2 text-primary"
                    onMouseEnter={() => setHoverKey(item.Title)}
                    onMouseLeave={() => setHoverKey(Path)}
                    onClick={() => setPopupModal(false)}
                  >
                    <div className="relative h-[50px] w-[80px]">
                      <motion.div
                        className="absolute h-full w-full rounded-r-[100px] bg-secondary px-[20px] py-3"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100%" }}
                        transition={{ type: "spring" }}
                      ></motion.div>
                      <div className="absolute left-[22px] top-[25%]">
                        {/* <img src={item.Icon} width={22}></img> */}
                        {item.Icon}
                      </div>
                    </div>
                    <div>{item.Title}</div>
                  </div>
                </Link>
              ) : (
                <div
                  key={item.Title}
                  className="flex cursor-pointer items-center gap-2 py-2 text-ternery"
                  onMouseEnter={() => setHoverKey(item.Title)}
                  onMouseLeave={() => setHoverKey(Path)}
                >
                  <div className="relative h-[50px] w-[80px]">
                    <div className="absolute left-[22px] top-[25%]">
                      {/* <img src={item.Icon} width={22}></img> */}
                      {item.Icon}
                    </div>
                  </div>
                  <div className="">{item.Title}</div>
                </div>
              ),
            )}
          </div>
        </div>
      ) : null}
      <NavbarComponent Path={Path} />
      <div className="flex w-full h-full">
        <div className="hidden min-w-48 pt-8 2xl:flex">
          <SideBarComponent Path={Path} />
        </div>
        <motion.div
          className="w-full pt-8 h-full"
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ delay: 0.6 }}
          key={Path}
        >
          {children}
        </motion.div>
      </div>
      <div className="mt-6 bg-red-300">
        <FooterComponent />
      </div>
    </div>
  );
}
