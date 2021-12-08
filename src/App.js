import React from "react";
import "./App.css";
import { Navbar, FAQ, Partner } from "./components";
import { Header, About, Market, Footer } from "./containers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Market />
      <div className="gradient__bg">
        <About />
      </div>
      <Partner />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
