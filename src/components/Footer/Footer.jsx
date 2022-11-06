import React from "react";
import "./Footer.css"
import FooterColumn from "./FooterColumn";

const Footer = ()=>{


   return(
      <div>
         <div className="footer__main">
            <div className="footer__container">
               <div className="footer__content">
                  <FooterColumn/>
               </div>
            </div>
         </div>
      </div>
   )
   
}
export default Footer;