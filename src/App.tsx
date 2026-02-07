import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Team from "./components/Team";
import Join from "./components/Join";
import Footer from "./components/Footer";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1 }}
      style={{ background: "#ffecec" }} // visible background test
    >
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Join />
      <Footer />
    </motion.div>
  );
}

export default App;
