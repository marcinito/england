import React,{useRef,useState,useEffect} from 'react';
import church from '../img/church.jpg'
function Home() {
   
    


  return <div className="home">
   <h3 style={{borderBottom:"5px solid black"}}>What about is this page?</h3>
   <br></br>
   <p>On this page you can find a information about what english word i know, what is my overall knowledge about english language,english say and other interesing information about history and culture  </p>
   <img className="church" src={church} alt="english church"/>
   <em>This page will be develop</em>
  </div>;
}

export default Home;
