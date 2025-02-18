import { motion, spring } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionMenu } from "../data/navbarMenu";

export default function SideBarComponent({ Path }: { Path: string }) {
  const [HoverKey, setHoverKey] = useState(Path);

  console.log(HoverKey);

  return (
    <motion.div
      className="bg-neutral font-medium tracking-wide"
      initial={{ opacity: 0, x: "10px" }}
      animate={{ opacity: 1, x: "0px" }}
      transition={{ delay: 0.4 }}
    >
      <div className="mr-[20px] flex flex-col gap-6">
        {SectionMenu.map((item) =>
          HoverKey == item.Title ? (
            <Link to={item.Url}>
              <div
                key={item.Title}
                className="flex cursor-pointer items-center gap-2 text-nowrap py-2"
                onMouseEnter={() => setHoverKey(item.Title)}
                onMouseLeave={() => setHoverKey(Path)}
              >
                <div className="relative h-[50px] w-[80px]">
                  <motion.div
                    className="absolute h-full w-full rounded-r-[100px] bg-secondary px-[20px] py-3"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ type: spring }}
                  ></motion.div>
                  <div className="absolute left-[22px] top-[25%] text-primary">
                    {item.Icon}
                  </div>
                </div>
                <div className="text-sm font-medium text-primary">
                  {item.Title}
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={item.Title}
              className="flex cursor-pointer items-center gap-2 text-nowrap py-2"
              onMouseEnter={() => setHoverKey(item.Title)}
              onMouseLeave={() => setHoverKey(Path)}
            >
              <div className="relative h-[50px] w-[80px]">
                <div className="absolute left-[22px] top-[25%] text-ternery">
                  {item.Icon}
                </div>
              </div>
              <div className="text-sm text-ternery">{item.Title}</div>
            </div>
          ),
        )}
      </div>
    </motion.div>
  );
}
