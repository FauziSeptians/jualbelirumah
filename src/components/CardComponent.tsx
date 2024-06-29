import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { dataPerumahanType } from "../types/CardTypes";

export default function CardComponent({
  data,
  Clicked,
}: {
  data: dataPerumahanType;
  Clicked?: boolean;
}) {
  const [HoveredImages, setHoveredImages] = useState(false);
  return (
    <>
      {!Clicked ? (
        <Link to={`/detail/${data.Id}`}>
          <div
            className="cursor-pointer w-[300px] md:w-full"
            onMouseOver={() => setHoveredImages(true)}
            onMouseLeave={() => setHoveredImages(false)}
          >
            <div className="w-[300px] h-[400px] md:w-full relative">
              <img
                src={data.Images.Thumbnail}
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
                    initial={{ x: "10px", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div className="flex gap-3 items-center">
                      <div className="">
                        <img src="/bathroom.png" width={30}></img>
                      </div>
                      <div>{data.Details.Bathroom}</div>
                    </motion.div>
                    <motion.div className="flex gap-3 items-center">
                      <div className="">
                        <img src="/bedroom.png" width={30}></img>
                      </div>
                      <div>{data.Details.Bedroom}</div>
                    </motion.div>
                  </motion.div>
                )}
                {HoveredImages && (
                  <motion.div
                    className="w-full flex flex-col gap-6"
                    initial={{ x: "10px", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div className="flex gap-3 items-center">
                      <div className="">
                        <img src="/area-graph.png" width={30}></img>
                      </div>
                      <div>{data.Details.AreaSurface}</div>
                    </motion.div>
                    <motion.div className="flex gap-3 items-center">
                      <div className="">
                        <img src="/house.png" width={30}></img>
                      </div>
                      <div>{data.Details.AreaBuilding}</div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="mt-3">
              <div className="text-sm">{data.Title}</div>
              <div className="flex flex-col gap-6 text-xs opacity-[0.6] ">
                <div className="flex gap-3 ">
                  <div>
                    <img src="/placeholder.png" width={14}></img>
                  </div>
                  <div>{data.Location}</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div
          className="w-[350px] md:w-full cursor-pointer"
          onMouseOver={() => setHoveredImages(true)}
          onMouseLeave={() => setHoveredImages(false)}
        >
          <div className="h-[400px] relative">
            <div className="w-full h-full object-cover rounded-[25px] shadow-lg bg-gray-500 ">
              <img
                src={data.Images.Thumbnail}
                className="w-full h-full object-cover rounded-[25px] shadow-lg bg-gray-500 "
              ></img>
            </div>
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
                  initial={{ x: "10px", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div className="flex gap-3 items-center">
                    <div className="">
                      <img src="/bathroom.png" width={30}></img>
                    </div>
                    <div>{data.Details.Bathroom}</div>
                  </motion.div>
                  <motion.div className="flex gap-3 items-center">
                    <div className="">
                      <img src="/bedroom.png" width={30}></img>
                    </div>
                    <div>{data.Details.Bedroom}</div>
                  </motion.div>
                </motion.div>
              )}
              {HoveredImages && (
                <motion.div
                  className="w-full flex flex-col gap-6"
                  initial={{ x: "10px", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div className="flex gap-3 items-center">
                    <div className="">
                      <img src="/area-graph.png" width={30}></img>
                    </div>
                    <div>{data.Details.AreaSurface}</div>
                  </motion.div>
                  <motion.div className="flex gap-3 items-center">
                    <div className="">
                      <img src="/house.png" width={30}></img>
                    </div>
                    <div>{data.Details.AreaBuilding}</div>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
          <div className="mt-3">
            <div className="text-sm">{data.Title}</div>
            <div className="flex flex-col gap-6 text-sm opacity-[0.6] ">
              <div className="flex gap-3 ">
                <div>
                  <img src="/placeholder.png" width={22}></img>
                </div>
                <div>{data.Location}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
