import { motion } from "framer-motion";

export default function ButtonComponent({ Text }: { Text: string }) {
  return (
    <motion.div
      className="py-2 px-5 rounded-lg bg-[#ffd34e] cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      {Text}
    </motion.div>
  );
}
