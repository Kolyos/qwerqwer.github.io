import React from "react";
import "./styles.css/app.css"
import Header from "./components/Header/Header";
import BrandMain from "./components/Main/brand/BrandMain";
import HelpMain from "./components/Main/HelpMain/HelpMain";
import Lorem from "./components/Main/Lorem/Lorem";
import Seem from "./components/Main/Seem/Seem";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <div className="App">
      <Header/>
      <BrandMain/>
      <HelpMain/>
      <Lorem/>
      <Seem/>
      <Footer/>
    </div>
  );
}


export default App;
