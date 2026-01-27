import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import NameSection from "./components/NameSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <NameSection />
      <Footer />
    </main>
  );
}

export default App;
