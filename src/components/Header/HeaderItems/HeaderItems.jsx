import React, { useState } from "react";
import "./headerItems.css"
import HeaderList from "./HeaderList";
import { HomeSvgSelector } from "./HomeSvgSelector.tsx";


const HeaderItems = () =>{

   const items = [{href:"/Project", value:"Project"},
                  {href:"/About", value:"About"},
                  {href:"/Blog", value:"Blog"},
                  {href:"/Contact", value:"Contact"}];
   const [menuActive, setMenuActive] = useState(false)

   return (
      <div>
         <div className="header__container">
            <div className="header__body">
               <div className="header__logo">
                  <HomeSvgSelector id="svg"/>
               </div>
                  {/* <HeaderList 
                  project='Project' about='About'
                  blog='Blog' contact='Contact'
                  /> */}
               <HeaderList active={menuActive} setActive={setMenuActive} items = {items}/>

               <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
               <span></span>
            </div>
            </div>
         </div>
      </div>
   )

}

export default HeaderItems;