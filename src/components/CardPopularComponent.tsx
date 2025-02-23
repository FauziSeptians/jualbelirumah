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
    <Link to={`/detail/${data.Id}`} className="w-full">
      <motion.div className="w-full">
        <div className="h-[300px]">
          <img
            src={data.Images.Thumbnail}
            className="h-full w-full rounded-[25px] bg-gray-500 object-cover shadow-lg"
          ></img>
        </div>
        <div className="mt-3 flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <div className="text-sm">{data.Title}</div>
            <div className="flex flex-col gap-6 text-sm opacity-[0.6]">
              <div className="flex gap-2">
                <div>
                  <img src="/placeholder.png" width={16}></img>
                </div>
                <div>{data.Location}</div>
              </div>
            </div>
          </div>
          <div className="line-clamp-3 text-sm opacity-[1]">
            {data.Description}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-[18px] font-bold">
            {toRupiah(data.Price.toString())}
          </div>

          <ButtonComponent Text="Contact" LinkURL={`/detail/${data.Id}`} />
        </div>
      </motion.div>
    </Link>
  );
}
