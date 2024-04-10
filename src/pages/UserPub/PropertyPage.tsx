import { Pagination } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import CardComponent from "../../components/CardComponent";
import DetailPage from "./DetailPage";

export default function PropertyPage() {
  const [clickedDetail, setclickedDetail] = useState("");
  const path = useLocation();
  const [searchParams] = useSearchParams();

  const keyValue = searchParams.get("search");

  console.log(path);
  console.log(keyValue);

  return (
    <div
      className={`w-full  h-[840px] overflow-y-scroll px-5 ${
        clickedDetail ? "flex gap-3" : null
      }`}
    >
      {/* <div>Search your dream home!</div> */}
      <div
        className={`overflow-y-scroll  mb-10 ${
          clickedDetail ? "w-[50%]" : "w-full"
        }`}
      >
        <div
          className={`w-full ${
            !clickedDetail ? "grid grid-cols-4" : "grid grid-cols-2"
          } gap-6`}
        >
          {Array(20)
            .fill([])
            .map((item, index) => {
              return (
                <div onClick={() => setclickedDetail("data")}>
                  <CardComponent
                    Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
                    Title="Rumah Murah di jawa barat"
                    Location="Bandung"
                    Clicked={true}
                  />
                </div>
              );
            })}
        </div>
        <div
          className={`${
            clickedDetail
              ? "w-full flex justify-center"
              : "w-full flex justify-end "
          } mt-10 px-5`}
        >
          <Pagination total={10} initialPage={1} color="primary" />
        </div>
      </div>

      {clickedDetail && (
        <div className="relative w-[50%] ">
          <motion.div
            animate={{ x: "0px", opacity: 1 }}
            initial={{ x: "100px", opacity: 0 }}
            exit={{ x: "100px", opacity: 0 }}
          >
            <DetailPage ClickedProperty={true} />
          </motion.div>

          <div
            className="absolute  top-[2%] right-[2%] cursor-pointer"
            onClick={() => setclickedDetail("")}
          >
            <div className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center text-center bg-[#ffd34e] font-semibold">
              X
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
