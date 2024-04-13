import { Pagination } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardComponent from "../../components/CardComponent";
import ErrorDataNotFound from "../../components/ErrorDataNotFound";
import SearchMobileComponent from "../../components/SearchMobileComponent";
import useDataSearch from "../../hooks/useDataSearch";
import DetailPage from "./DetailPage";

export default function PropertyPage() {
  const [clickedDetail, setclickedDetail] = useState("");
  const [searchParams] = useSearchParams();
  const keyValue = searchParams.get("search");
  const isMobile =
    /Iphone|iPad|iPod|Android|Opera Mini|Blackberry|webOS|Windows Phone|Samsung|HTC|Micromax|Motorola|诺基亚|索尼|华为|小米|魅族|OPPO|VIVO/i.test(
      navigator.userAgent
    );

  const { dataPerumahan, pages } = useDataSearch(keyValue);

  console.log(dataPerumahan);

  return (
    <div
      className={`w-full  h-[840px] overflow-y-scroll px-5 ${
        clickedDetail ? "flex gap-3" : null
      }`}
    >
      {/* <div>Search your dream home!</div> */}
      <div className="mb-10">
        <SearchMobileComponent />
      </div>
      <div
        className={`overflow-y-scroll   mb-10 ${
          clickedDetail ? "w-[50%]" : "w-full"
        }`}
      >
        <div
          className={`w-full ${
            !clickedDetail
              ? "md:grid grid-cols-4 md:mb-0 flex flex-col"
              : "grid grid-cols-2"
          } gap-6 `}
        >
          {dataPerumahan.length != 0 &&
            dataPerumahan.map((item) => {
              return (
                <div onClick={() => setclickedDetail(item.Id.toString())}>
                  <CardComponent
                    data={item}
                    Clicked={isMobile == false ? true : false}
                  />
                </div>
              );
            })}
        </div>
        {dataPerumahan.length == 0 && <ErrorDataNotFound />}
        {dataPerumahan.length != 0 ? (
          <div
            className={`${
              clickedDetail
                ? "w-full flex justify-center"
                : "w-full flex justify-end "
            } mt-10 px-5`}
          >
            <Pagination total={pages} initialPage={1} color="primary" />
          </div>
        ) : null}
      </div>

      {isMobile == false && clickedDetail && (
        <div className="relative w-[50%] ">
          <motion.div
            animate={{ x: "0px", opacity: 1 }}
            initial={{ x: "100px", opacity: 0 }}
            exit={{ x: "100px", opacity: 0 }}
          >
            <DetailPage ClickedProperty={true} Id={clickedDetail} />
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
