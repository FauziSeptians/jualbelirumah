import { useAtom } from "jotai";
import { modalImageStore } from "../store/modalImagesStore";

export default function ModalsImagesComponent({ Images }: { Images: string }) {
  const [, setOpenModalImage] = useAtom(modalImageStore);

  return (
    <div
      className="fixed z-[1000] bg-[#000000c9] w-full h-screen flex justify-center items-center cursor-pointer"
      onClick={() => setOpenModalImage("")}
    >
      <img src={Images}></img>
    </div>
  );
}
