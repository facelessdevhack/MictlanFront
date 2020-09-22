import { motion } from "framer-motion";
import Header from "./components/Header";
export default function Gallery() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Header />
      <h1 style={{ color: "white" }}>This is Gallery Page</h1>
    </motion.div>
  );
}
