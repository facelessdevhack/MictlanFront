import Header from "./components/Header";
import { motion } from "framer-motion";

function Updates() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      inital={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* <Header /> */}
      <h1 style={{ color: "white" }}>This is Updates Page</h1>
    </motion.div>
  );
}
export default Updates;
