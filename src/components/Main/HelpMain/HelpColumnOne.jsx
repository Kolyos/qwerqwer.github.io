import React from "react";
import "./HelpColumnOne.css"

const HelpColumnOme = (props) => {
const pictureColumnOne = new URL("./columnOne.jpg", import.meta.url)
   return (
      <div>
         <div className="columnone__body">
            <div className="columnone__column">
               <div className="columnone__item">
                  <div className="columnone__picture">
                     <img src={pictureColumnOne} alt="pictureone" />
                  </div>
               </div>
            </div>
            <div className="columnone__column">
               <div className="columnone__item">
                  <div className="columnone__titlebtn">
                     <div className="columnone__title">
                        <p>My services are perfect for companies that are just getting started</p>
                     </div>
                  </div>
                  <div className="columnone__brn">
                     <a href="#">{props.HelpColumnOme}</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )

}

export default HelpColumnOme;