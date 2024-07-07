import { useAtom } from "jotai";
import { modalImageStore } from "../store/modalImagesStore";

export default function ModalsImagesComponent({ Images }: { Images: string }) {
  const [, setOpenModalImage] = useAtom(modalImageStore);

  return (
    <div
      className="fixed z-[1000] flex h-screen w-full cursor-pointer items-center justify-center bg-[#000000c9]"
      onClick={() => setOpenModalImage("")}
    >
      <img src={Images}></img>
    </div>
  );
}
