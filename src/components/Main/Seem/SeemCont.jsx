import React from "react";

const SeemCont = (props)=>{

   return(
      <div>
         <div className="seem__title">
            <p>Seem like a good fit?</p>
         </div>
         <div className="seem__btn">
            <a href="#">{props.SeemCont}</a>
         </div>
      </div>
   )
   
}
export default SeemCont;