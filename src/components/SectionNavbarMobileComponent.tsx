import { useAtom } from "jotai";
import { PopupModals } from "../store/popupModalsNavbar";

export function SectionNavbarMobileComponent() {
  const [, setPopupModal] = useAtom(PopupModals);
  return (
    <div
      className="relative  mr-[20px] h-[20px] w-[25px] md:hidden block"
      onClick={() => setPopupModal(true)}
    >
      <div className="absolute top-0 w-full h-fit flex flex-col  gap-1 items-end text-end">
        <div className="w-full h-[5px] bg-[#ffd34e]"></div>
        <div className="w-[80%] h-[5px] bg-[#ffd34e]"></div>
        <div className="w-[60%] h-[5px] bg-[#ffd34e]"></div>
      </div>
    </div>
  );
}
