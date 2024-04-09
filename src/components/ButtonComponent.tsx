import { motion } from "framer-motion";

export default function ButtonComponent({
  Text,
  Icon,
  Color,
  Border,
  LinkURL,
}: {
  Text: string;
  Icon?: string;
  Color?: string;
  Border?: string;
  LinkURL: string;
}) {
  return (
    <a href={LinkURL} target="_blank">
      <motion.div
        className={`py-2 px-5 rounded-lg ${
          Color ? `bg-[${Color}]` : "bg-[#ffd34e]"
        } cursor-pointer ${
          Icon ? "flex gap-3 items-center justify-center" : null
        } ${Border ? Border : null}`}
        whileHover={{ scale: 1.02 }}
      >
        {Icon && (
          <div>
            <img src={Icon} width={18}></img>
          </div>
        )}
        <div>{Text}</div>
      </motion.div>
    </a>
  );
}
