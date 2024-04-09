import { useAtom } from "jotai";
import { modalImageStore } from "../../store/modalImagesStore";
import FooterComponent from "../FooterComponent";
import ModalsImagesComponent from "../ModalsImagesComponent";
import NavbarComponent from "../NavbarComponent";
import SideBarComponent from "../SideBarComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [ModalImages] = useAtom(modalImageStore);

  console.log(ModalImages);

  return (
    <>
      {ModalImages.length != 0 && (
        <ModalsImagesComponent Images={ModalImages} />
      )}
      <NavbarComponent />
      <div className="flex ">
        <div className="w-[12%]">
          <SideBarComponent />
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
