import React from "react";
import TextBrand from "./TextBrand";
import "./BrandMain.css"
import ImageBrand from "./ImageBrand";

const BrandMain = () =>{

   return (
      <div>
         <div className="brandmain__container">
            <div className="brandmain__body">
               <div className="brandmain__item">
                  <TextBrand/>
                  <ImageBrand/>
               </div>
            </div>
         </div>
      </div>
   )

}

export default BrandMain;