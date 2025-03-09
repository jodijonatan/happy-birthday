import { motion } from "framer-motion";

const AnimatedText = () => {
  return (
    <motion.div
      className="animated-text"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h2>Selamat Ulang Tahun! 🎂</h2>
    </motion.div>
  );
};

export default AnimatedText;
