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
        className={`rounded-lg px-5 py-2 ${
          Color ? `bg-[${Color}]` : "bg-primary text-white"
        } cursor-pointer ${
          Icon ? "flex items-center justify-center gap-3" : null
        } ${Border ? Border : null}`}
        whileHover={{ scale: 1.02 }}
      >
        {Icon && (
          <div>
            <img src={Icon} width={18}></img>
          </div>
        )}
        <div className="text-center text-sm font-medium">{Text}</div>
      </motion.div>
    </a>
  );
}
