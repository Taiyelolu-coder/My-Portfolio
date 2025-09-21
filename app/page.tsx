
import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
// import Services from "./components/Services";
// import Portfolio from "./components/Portfolio";
// import Pricing from "./components/Pricing";
// import Experience from "./components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Pricing /> */}
      {/* <Experience /> */}
      <Footer />
    </>
  );
}
