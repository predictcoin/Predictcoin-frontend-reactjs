import React from "react";
import "./App.css";
import { Navbar, Audit, FAQ, Partner, WhitePaper } from "./components";
import { Header, About, Market, RoadMap, Footer } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Market />
      <div className="gradient__bg">
        <About />
        <WhitePaper />
        <Audit />
        <RoadMap />
      </div>
      <Partner />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
