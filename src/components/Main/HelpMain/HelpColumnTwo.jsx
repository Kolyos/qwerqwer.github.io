import React from "react";
import "./HelpColumnTwo.css"

const HelpColumnTwo = (props) => {
   const pictureColumnTwo = new URL("./columnTwo.jpg", import.meta.url)
   return(
      <div>
         <div className="columntwo__body">
            <div className="columntwo__column">
               <div className="columntwo__item">
                  {/* <div className="columntwo__picture">
                     <img src={pictureColumnTwo} alt="pictureone" />
                  </div> */}
                  <div className="columntwo__titlebtn">
                     <div className="columntwo__title">
                        <p>I'm always on the go. Follow along!</p>
                     </div>
                  </div>
                  <div className="columntwo__brn">
                     <a href="#">{props.HelpColumnTwo}</a>
                  </div>
               </div>
            </div>
            <div className="columntwo__column">
               <div className="columntwo__item">
                  <div className="columntwo__picture">
                     <img src={pictureColumnTwo} alt="pictureone" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )

}
export default HelpColumnTwo;