import { useAtom } from "jotai";
import { PopupModals } from "../store/popupModalsNavbar";

export function SectionNavbarMobileComponent() {
  const [, setPopupModal] = useAtom(PopupModals);
  return (
    <div
      className="relative mr-[20px] block h-[20px] w-[25px] lg:hidden"
      onClick={() => setPopupModal(true)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 cursor-pointer text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
