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
    <div className="fixed z-[1000] bg-[#000000c9] w-full h-screen flex justify-center items-center cursor-pointer">
      <div className="text-white absolute w-full flex justify-between  px-[100px]">
        {idxModalAllImage != 0 ? (
          <div
            className="w-[50px] h-[50px] bg-[#ffd34e] rounded-full flex justify-center items-center"
            onClick={() => setIdxModalAllImage(idxModalAllImage - 1)}
          >{`<-`}</div>
        ) : (
          <div></div>
        )}
        {idxModalAllImage != lengthData ? (
          <div
            className="w-[50px] h-[50px] bg-[#ffd34e] rounded-full flex justify-center items-center"
            onClick={() => setIdxModalAllImage(idxModalAllImage + 1)}
          >{`->`}</div>
        ) : (
          <div></div>
        )}
      </div>
      <img
        src={Images}
        className=" bg-red-300"
        onClick={() => setOpenModalAllImages([])}
      ></img>
      <div className=""></div>
    </div>
  );
}
