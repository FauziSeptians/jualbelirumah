import { motion } from "framer-motion";
import { useState } from "react";
import { MiniCardPopularTypes } from "../types/CardTypes";

export default function MiniCardPopularComponent({
  Images,
  Title,
  Location,
}: MiniCardPopularTypes) {
  const [Hover, setHover] = useState(false);
  return (
    <div
      className="w-full flex gap-3 items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {Hover ? (
        <motion.div className="h-[100px]" animate={{ scale: 1.02 }}>
          <img
            src={Images}
            className="w-full h-full object-cover rounded-[15px] shadow-lg bg-gray-500 "
          ></img>
        </motion.div>
      ) : (
        <div className="h-[100px]">
          <img
            src={Images}
            className="w-full h-full object-cover rounded-[15px] shadow-lg bg-gray-500 "
          ></img>
        </div>
      )}

      <div>
        {Hover ? (
          <motion.div
            initial={{ y: "100px", opacity: 1 }}
            animate={{ y: "0px", opacity: 1 }}
          >
            {Title}
          </motion.div>
        ) : (
          <motion.div>{Title}</motion.div>
        )}
        <div className="flex flex-col gap-6">
          <div className="flex gap-3 text-[16px] opacity-[0.6]">
            <div>
              <img src="/placeholder.png" width={22}></img>
            </div>
            <div>{Location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
