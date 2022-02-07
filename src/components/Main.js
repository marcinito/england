import React from 'react';
import {NavLink,Outlet} from 'react-router-dom'
function Main() {
  return <div className="main">
  

  <div className="navbarMain">
    <div className="words"><NavLink className={({isActive})=>isActive?"activeLinks":"noActiveLink"} to="words">Vocabulary</NavLink></div>
    <div className="books"><NavLink className={({isActive})=>isActive?"activeLinks":"noActiveLink"} to="books">Books</NavLink></div>
    <div className="task"><NavLink className={({isActive})=>isActive?"activeLinks":"noActiveLink"} to="paint">Paint</NavLink></div>
   
  </div>
  <div className="outletMain">
  <Outlet></Outlet>
  </div>
 
  </div>
}

export default Main;
