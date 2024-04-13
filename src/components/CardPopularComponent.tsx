import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { dataPerumahanType } from "../types/CardTypes";
import { toRupiah } from "../utils/toRupiah";
import ButtonComponent from "./ButtonComponent";

export default function CardPopularComponent({
  data,
}: {
  data: dataPerumahanType;
}) {
  return (
    <Link to={`/detail/${data.Id}`}>
      <motion.div className="w-full ">
        <div className="h-[300px]">
          <img
            src={data.Images.Thumbnail}
            className="w-full h-full object-cover rounded-[25px] shadow-lg bg-gray-500 "
          ></img>
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div>
            <div className="text-[18px]">{data.Title}</div>
            <div className="flex flex-col gap-6 text-[16px] opacity-[0.6]">
              <div className="flex gap-3">
                <div>
                  <img src="/placeholder.png" width={22}></img>
                </div>
                <div>{data.Location}</div>
              </div>
            </div>
          </div>
          <div className="text-[16px] opacity-[1] line-clamp-3 ">
            {data.Description}
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-[18px] font-bold">
            {toRupiah(data.Price.toString())}
          </div>

          <ButtonComponent Text="Contact" LinkURL={`/detail/${data.Id}`} />
        </div>
      </motion.div>
    </Link>
  );
}
