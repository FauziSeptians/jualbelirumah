import { motion } from "framer-motion";

export default function SectionMenuComponent({
  Text,
  setHoverText,
  boolHovered,
  defaultText,
}: {
  Text: string;
  setHoverText: (text: string) => void;
  boolHovered: boolean;
  defaultText: string;
}) {
  console.log(Text);
  console.log(boolHovered);
  console.log(defaultText);
  return (
    <div
      className="flex flex-col gap-2 cursor-pointer"
      onMouseMove={() => setHoverText(Text)}
      onClick={() => setHoverText(Text)}
      onMouseLeave={() => setHoverText(defaultText)}
    >
      <div className={`${boolHovered && "text-primary"} text-sm`}>{Text}</div>

      {boolHovered ? (
        <motion.div
          className="bg-primary h-[2px] w-[45px]"
          initial={{ width: "0px" }}
          animate={{ width: "45px" }}
        ></motion.div>
      ) : null}
    </div>
  );
}
