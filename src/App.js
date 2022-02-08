import React,{useState,useEffect,useRef} from 'react';
import NavBar from './components/NavBar';
import { Routes,Route,Outlet } from 'react-router-dom';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import './css/style.css'
import Main from './components/Main';
import Books from './components/Books';
import Paint from './components/Paint';
import CanvasIndex from './components/CanvasIndex';
import "./fontello/css/fontello.css"
function App() {
  const containerRef=useRef()
  const [bgc,setBgc]=useState(false)
  useEffect(()=>{
    if(bgc===true){
containerRef.current.classList.add("containerNight")
containerRef.current.classList.remove("containerDay")
    }
    else{
      containerRef.current.classList.remove("containerNight")
      containerRef.current.classList.add("containerDay")
    }
  })
 
  return <div className="container" >
<NavBar set={setBgc} />

<main ref={containerRef}>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/main" element={<Main/>}>
    <Route path="words" element={<Vocabulary/>}/>
    <Route index element={<CanvasIndex/>}/>
    <Route path="books" element={<Books/>}/>
    <Route path="paint" element={<Paint/>}/>
  </Route>
</Routes>

<div className="media">

  <div className="facebook"><a className="linkss" href="https://www.facebook.com/">FACEBOOK</a></div>
  <div className="youtube"><a className="linkss" href="https://www.youtube.com/">YOUTUBE</a></div>
  <div className="google"><a className="linkss" href="https://www.google.pl/">GOOGLE</a></div>
</div>
  </main>
  </div>;

}

export default App;
