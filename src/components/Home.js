import React,{useRef,useState,useEffect,useLayoutEffect} from 'react';
import church from '../img/church.jpg'
function Home() {
   const homeRef=useRef(null)
  useLayoutEffect(()=>{
    homeRef.current.style.height=window.innerHeight/1.2+"px"
  })

  return <div className="home" ref={homeRef}>
   <h3 style={{borderBottom:"5px solid black",color:"darkred"}}>What about is this page?</h3>
   <br></br>
   <p style={{width:"80%",margin:"0 auto",textJustify:"center"}}>On this page you can find a information about me, you can check what skills I have in <span style={{fontWeight:"bold",color:"darkorange"}}>JavaScript </span><span style={{fontWeight:"bold",color:"blue"}}>CSS/SCSS </span><span style={{fontWeight:"bold",color:"violet"}}>REACT </span><span style={{fontWeight:"bold",color:"darkblue"}}>HTML</span>,I very like learning programming this is very excited and interesing for me.  </p>
   <img className="church" src={church} alt="english church"/>
   <em>This page will be develop</em>
   <h2>07951223521</h2>
  </div>;
}

export default Home;
