import { motion, spring } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionMenu } from "../data/constant/NavbarMenu";

export default function SideBarComponent({ Path }: { Path: string }) {
  const [HoverKey, setHoverKey] = useState(Path);

  console.log(HoverKey);

  return (
    <div className="">
      <div className="flex flex-col gap-6 mr-[20px]">
        {SectionMenu.map((item) =>
          HoverKey == item.Title ? (
            <Link to={item.Url}>
              <div
                key={item.Title}
                className="cursor-pointer flex gap-2  py-2 items-center "
                onMouseEnter={() => setHoverKey(item.Title)}
                onMouseLeave={() => setHoverKey(Path)}
              >
                <div className="relative w-[80px] h-[50px]">
                  <motion.div
                    className="absolute px-[20px] secondaryColor rounded-r-[100px] w-full h-full  py-3"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    transition={{ type: spring }}
                  ></motion.div>
                  <div className="absolute top-[25%] left-[22px]">
                    <img src={item.Icon} width={22}></img>
                  </div>
                </div>
                <div>{item.Title}</div>
              </div>
            </Link>
          ) : (
            <div
              key={item.Title}
              className="cursor-pointer flex gap-2 py-2 items-center"
              onMouseEnter={() => setHoverKey(item.Title)}
              onMouseLeave={() => setHoverKey(Path)}
            >
              <div className="relative w-[80px] h-[50px] ">
                {/* <div className="absolute px-[20px] bg-green-200 rounded-r-[100px] w-full h-full  py-3"></div> */}
                <div className="absolute top-[25%] left-[22px]">
                  <img src={item.Icon} width={22}></img>
                </div>
              </div>
              <div className="">{item.Title}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
