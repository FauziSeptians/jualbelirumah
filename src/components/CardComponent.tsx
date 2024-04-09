import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CardTypes } from "../types/CardTypes";

export default function CardComponent({ Images, Title, Location }: CardTypes) {
  const [HoveredImages, setHoveredImages] = useState(false);
  return (
    <Link to={`/detail/${Title}`}>
      <div
        className="w-[350px] cursor-pointer"
        onMouseOver={() => setHoveredImages(true)}
        onMouseLeave={() => setHoveredImages(false)}
      >
        <div className="h-[400px] relative">
          <img
            src={Images}
            className="w-full h-full object-cover rounded-[25px] shadow-lg bg-gray-500 "
          ></img>
          {HoveredImages && (
            <motion.div
              className="absolute bottom-0  bg-black w-full h-full opacity-[0.6] rounded-[25px]"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100%", opacity: 0.6 }}
            ></motion.div>
          )}
          <div className="absolute bottom-0 p-5 text-[#ffd34e] flex gap-3 w-full">
            {HoveredImages && (
              <motion.div
                className="w-full flex flex-col gap-6"
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div className="flex gap-3 items-center">
                  <div className="">
                    <img src="/bathroom.png" width={30}></img>
                  </div>
                  <div>3</div>
                </motion.div>
                <motion.div className="flex gap-3 items-center">
                  <div className="">
                    <img src="/bedroom.png" width={30}></img>
                  </div>
                  <div>3</div>
                </motion.div>
              </motion.div>
            )}
            {HoveredImages && (
              <motion.div
                className="w-full flex flex-col gap-6"
                initial={{ y: "100px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div className="flex gap-3 items-center">
                  <div className="">
                    <img src="/area-graph.png" width={30}></img>
                  </div>
                  <div>300</div>
                </motion.div>
                <motion.div className="flex gap-3 items-center">
                  <div className="">
                    <img src="/house.png" width={30}></img>
                  </div>
                  <div>500</div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
        <div className="mt-3">
          <div className="text-[18px]">{Title}</div>
          <div className="flex flex-col gap-6 text-[16px] opacity-[0.6] ">
            <div className="flex gap-3 ">
              <div>
                <img src="/placeholder.png" width={22}></img>
              </div>
              <div>{Location}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
