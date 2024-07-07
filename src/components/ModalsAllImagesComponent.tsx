import { useAtom } from "jotai";
import {
  IdxModalAllImage,
  modalAllImageStore,
} from "../store/modalImagesStore";

export default function ModalsAllImagesComponent({
  Images,
  lengthData,
}: {
  Images: string;
  lengthData: number;
}) {
  const [idxModalAllImage, setIdxModalAllImage] = useAtom(IdxModalAllImage);
  const [, setOpenModalAllImages] = useAtom(modalAllImageStore);

  return (
    <div className="fixed z-[1000] flex h-screen w-full cursor-pointer items-center justify-center bg-[#000000c9]">
      <div className="absolute flex w-full justify-between px-[100px] text-white">
        {idxModalAllImage != 0 ? (
          <div
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ffd34e]"
            onClick={() => setIdxModalAllImage(idxModalAllImage - 1)}
          >{`<-`}</div>
        ) : (
          <div></div>
        )}
        {idxModalAllImage != lengthData ? (
          <div
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#ffd34e]"
            onClick={() => setIdxModalAllImage(idxModalAllImage + 1)}
          >{`->`}</div>
        ) : (
          <div></div>
        )}
      </div>
      <img
        src={Images}
        className="bg-red-300"
        onClick={() => setOpenModalAllImages([])}
      ></img>
      <div className=""></div>
    </div>
  );
}
