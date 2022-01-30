import React,{useRef,useState,useEffect} from 'react';
import {NavLink} from 'react-router-dom'
function NavBar(props) {
    const [toggle,setToggle]=useState(false)
    const turnerRef=useRef()



    const turnOn=()=>{
if(toggle===false){

    turnerRef.current.classList.add("on")
    turnerRef.current.classList.remove("off")
    props.set(true)
    setToggle(!toggle)
    return
}
else{
    turnerRef.current.classList.add("off")
    turnerRef.current.classList.remove("on")
    props.set(false)
    setToggle(!toggle)
    return
}
    }
    
  return (
      <nav>
          <ul>
              <NavLink to="/home" className={({isActive})=>isActive?"homeActive":"homeUnactive"}><li>Home</li></NavLink>
              <NavLink to="/main" className={({isActive})=>isActive?"homeActive":"homeUnactive"}><li>Main</li></NavLink>
          </ul>
         <div className="navThirdPart"><div className="toggle"><div className="turner" ref={turnerRef} onClick={()=>turnOn()}></div></div></div>
     
      </nav>
  );
}

export default NavBar;
