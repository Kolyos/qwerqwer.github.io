import React from "react";
import HelpColumnOme from "./HelpColumnOne";
import HelpColumnTwo from "./HelpColumnTwo";
import "./HelpMain.css"
import HelpTitleBtn from "./HelpTitleBtn";

const HelpMain = () =>{

   return (
      <div>
         <div className="help__container">
            <div className="help__content">
               <HelpTitleBtn helpTitleBtn={"See my work"}/>
               <HelpColumnOme HelpColumnOme={"Learn more"}/>
               <HelpColumnTwo HelpColumnTwo={"@aloha"}/>
            </div>
         </div>
      </div>
   )

}

export default HelpMain;