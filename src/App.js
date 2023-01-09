import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IconSection from "./components/IconSection";
import Navbar from "./components/Navbar";
import Form from "./components/Form";



function App() {
  return (
    <div className="container-fluid">
    <Navbar/>
    <Header/>
    <IconSection/>
    <Form/>
    <Footer/>
    </div>
  );
}

export default App;
