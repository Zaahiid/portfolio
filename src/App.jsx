import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <section id="about" />
      <About />
      <Skills />
      <section id="projects" />
      <Projects />
      <section id="contact" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
