import React from "react";
import { FooterSvgSelector } from "./FooterSvgSelector.tsx";
import "./FooterColumn.css"

const FooterColumn = (itemsFooter)=>{

   return(
      <div>
         <div className="footer__body">
            <div className="footer__column">
               <div className="footer__item">
                  <div className="footer__left">
                     <div className="left__text">
                        <p>© Aloha</p>
                        <p>Webflow</p>
                     </div>
                     <div>
                     <FooterSvgSelector id="svs"/>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__column">
               <div className="footer__item">
                  <div className="footer__right">
                     <ul className="right__textone">
                        <li> <a href="#">About</a> </li>
                        <li> <a href="#">Contact</a> </li>
                        <li> <a href="#">Licenses</a> </li>
                        <li> <a href="#">Style Guide</a> </li>
                        <li> <a href="#">Changelog</a> </li>
                        <li> <a href="#">Password</a> </li>
                        <li> <a href="#">404</a> </li>
                     </ul>
                     <ul className="right__texttwo">
                     <li> <a href="#">Home 1</a> </li>
                        <li> <a href="#">Home 2</a> </li>
                        <li> <a href="#">Work 1</a> </li>
                        <li> <a href="#">Work 2</a> </li>
                        <li> <a href="#">Blog 1</a> </li>
                        <li> <a href="#">Blog 2</a> </li>
                     </ul>
                     <ul className="right__textthree">
                        <li> <a href="#">Twitter</a> </li>
                        <li> <a href="#">Instagram</a> </li>
                        <li> <a href="#">Facebook</a> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
   
}
export default FooterColumn;