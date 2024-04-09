import { motion } from "framer-motion";
import { useState } from "react";

export default function CardLocationComponent({
  Title,
  Description,
  Images,
}: {
  Title: string;
  Description: string;
  Images: string;
}) {
  const [Hover, setHover] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="">
        <img className="w-[400px] rounded-lg" src={Images}></img>
      </div>
      {Hover && (
        <motion.div
          className="bg-black w-[353px] h-full absolute bottom-0 rounded-lg opacity-[0.6]"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "100%", opacity: 0.6 }}
        ></motion.div>
      )}
      {Hover && (
        <motion.div
          className="absolute bottom-0 p-3 text-[#ffd34e] flex flex-col "
          initial={{ y: "100px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div>{Title}</div>
          <div className="opacity-[0.8] text-[16px]">{Description}</div>
        </motion.div>
      )}
    </div>
  );
}
