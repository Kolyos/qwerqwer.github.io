import React from "react";
import "./HeaderList.css"



const HeaderList = ({items, active, setActive}) =>{

   return ( 
            <div>
               <div className={active ? 'header__menu active' : 'header__menu'} onClick = {()=> setActive(false)}>
                  <ul className="header__list">
                     {items.map(item =>
                        <li> <a href={item.href}>{item.value}</a> </li>
                        )}
                  </ul>
               </div>
            </div>
   )

}

export default HeaderList;