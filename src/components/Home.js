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
   <p style={{width:"80%",margin:"0 auto"}}>On this page you can find a information about what english word i know, what is my overall knowledge about english language,english say and other interesing information about history and culture  </p>
   <img className="church" src={church} alt="english church"/>
   <em>This page will be develop</em>
  </div>;
}

export default Home;
