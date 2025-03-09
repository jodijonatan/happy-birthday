import { motion } from "framer-motion";

const BirthdayCard = () => {
  return (
    <motion.div
      className="birthday-card"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/birthday-person.jpg"
        alt="Birthday Person"
        className="profile-pic"
      />
      <h1>Happy Birthday! 🎉</h1>
      <p>Wishing you all the best on your special day! 💖</p>
    </motion.div>
  );
};

export default BirthdayCard;
