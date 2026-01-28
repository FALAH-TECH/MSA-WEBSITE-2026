import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Team from './components/Team';
import Join from './components/Join';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050810]">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
