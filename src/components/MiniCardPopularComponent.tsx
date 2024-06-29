import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { dataPerumahanType } from "../types/CardTypes";

export default function MiniCardPopularComponent({
  data,
}: {
  data: dataPerumahanType;
}) {
  const [Hover, setHover] = useState(false);
  return (
    <Link to={`/detail/${data.Id}`}>
      <motion.div
        className="relative w-full flex gap-3 items-center cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{ width: "95%" }}
        whileHover={{
          borderRadius: "15px",
          backgroundColor: "#ddebf2",
          width: "100%",
        }}
      >
        {Hover ? (
          <motion.div className="h-[100px]" animate={{ scale: 1.02 }}>
            <img
              src={data.Images.Thumbnail}
              className="w-[200px] h-full object-cover rounded-[5px] shadow-lg bg-gray-500 "
            ></img>
          </motion.div>
        ) : (
          <div className="h-[100px]">
            <img
              src={data.Images.Thumbnail}
              className="w-[200px] h-full object-cover rounded-[5px] shadow-lg bg-gray-500 "
            ></img>
          </div>
        )}

        <div className="flex flex-col gap-2">
          {Hover ? (
            <motion.div
              initial={{ y: "10px", opacity: 1 }}
              animate={{ y: "0px", opacity: 1 }}
              className="text-sm"
            >
              {data.Title}
            </motion.div>
          ) : (
            <motion.div className="text-sm">{data.Title}</motion.div>
          )}
          <div className="flex flex-col gap-6">
            <div className="flex gap-1 text-xs opacity-[0.6] items-center">
              <div>
                <img src="/placeholder.png" width={16}></img>
              </div>
              {Hover ? (
                <motion.div
                  initial={{ y: "10px", opacity: 1 }}
                  animate={{ y: "0px", opacity: 1 }}
                >
                  {data.Location}
                </motion.div>
              ) : (
                <div>{data.Location}</div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
