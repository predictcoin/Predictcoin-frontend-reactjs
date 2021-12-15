import React, { useRef } from "react";

import "./Home.css";

import Header from "./header";
import About from "./about";
import Footer from "./footer";
import Market from "./market";
import RoadMap from "./roadmap";
import Navbar from "./navbar";
import WhitePaper from "./whitepaper";
import Partner from "./partner";
import FAQ from "./FAQ";

function App() {
  const pageRefs = useRef({});

  return (
    <div className="App">
      <Navbar pageRefs={pageRefs}/>
      <Header />
      <Market pageRefs={pageRefs}/>
      <div className="gradient__bg">
        <About pageRefs={pageRefs}/>
        <WhitePaper pageRefs={pageRefs}/>
        <RoadMap pageRefs={pageRefs}/>
      </div>
      <Partner pageRefs={pageRefs}/>
      <FAQ pageRefs={pageRefs}/>
      <Footer />
    </div>
  );
}

export default App;
