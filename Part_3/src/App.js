import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Hero/Home";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Project";
import Contact from "./components/Conatct/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
