import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <h1>🎉 Selamat Ulang Tahun! 🎂</h1>
      <p>Semoga panjang umur dan sehat selalu! 🥳</p>
    </motion.div>
  );
}

export default App;
