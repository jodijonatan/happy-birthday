import "./index.css";
import BirthdayCard from "./components/BirthdayCard";
import BackgroundMusic from "./components/BackgroundMusic";
import AnimatedText from "./components/AnimatedText";
import Balloons from "./components/Balloons";
import ConfettiEffect from "./components/ConfettiEffect";
import FireworksEffect from "./components/FireworksEffect";

function App() {
  return (
    <div className="App">
      <BackgroundMusic />
      <AnimatedText />
      <BirthdayCard />
      <Balloons />
      <FireworksEffect />
      <ConfettiEffect />
    </div>
  );
}

console.log("CSS harusnya sudah terhubung!");

export default App;
