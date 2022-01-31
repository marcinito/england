import React,{useState,useEffect,useRef} from 'react';
import NavBar from './components/NavBar';
import { Routes,Route,Outlet } from 'react-router-dom';
import Home from './components/Home';
import Vocabulary from './components/Vocabulary';
import './css/style.css'
import Main from './components/Main';
import Books from './components/Books';
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
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/main" element={<Main/>}>
    <Route path="words" element={<Vocabulary/>}/>
    <Route path="books" element={<Books/>}/>
  </Route>
</Routes>
<div className="media">
  <div className="facebook">FACEBOOK</div>
  <div className="youtube">YOUTUBE</div>
  <div className="google">GOOGLE</div>
</div>
  </main>
  </div>;

}

export default App;
