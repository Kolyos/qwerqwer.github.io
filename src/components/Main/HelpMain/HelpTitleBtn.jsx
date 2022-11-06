import React from "react";
import "./HelpTitleBtn.css"

const HelpTitleBtn = (props) =>{

   return (
      <div>
        <div className="help__titlebtn">
            <div className="help__title">
               <p>I help emerging brands get their footing in today's digital world.</p>
            </div>
            <div className="help__btn">
               <a href="#">{props.helpTitleBtn}</a>
            </div>
        </div>
      </div>
   )

}

export default HelpTitleBtn;