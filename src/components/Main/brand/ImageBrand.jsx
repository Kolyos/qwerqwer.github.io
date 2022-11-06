import React from "react";
import "./ImageBrand.css"
const ImageBrand = () =>{

   const manPicture = new URL("./man.jpg", import.meta.url)

   return (
      <div>
         <div className="brandmain__image">
            <img src={manPicture} alt="manIMG"/>
         </div>
      </div>
   )

}

export default ImageBrand;