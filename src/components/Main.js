import React from 'react';
import {NavLink,Outlet} from 'react-router-dom'
function Main() {
  return <div className="main">;
  

  <div className="navbarMain">
    <div className="words"><NavLink to="words">Vocabulary</NavLink></div>
    <div className="books"><NavLink to="books">Books and Author</NavLink></div>
    <div className="task"><NavLink to="paint">Paint</NavLink></div>
   
  </div>
  <div className="outletMain">
  <Outlet></Outlet>
  </div>
 
  </div>
}

export default Main;
