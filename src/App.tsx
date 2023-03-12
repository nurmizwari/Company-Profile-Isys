import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import GetSkill from "./components/getSkill";
import Howitworks from "./components/howitworks";
import Process from "./components/process";
import Features from "./components/features";
import Count from "./components/count";
import Access from "./components/access";
import Students from "./components/students";
import Investing from "./components/investing";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <GetSkill />
      <Howitworks />
      <Process />
      <Features />
      <Count />
      <Access />
      <Students />
      <Investing />
      <Footer />
    </>
  );
}

export default App;
