import React, {  } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCom from './NavbarData/NavbarCom';
import Home from './HomeData/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './SkillsPage/Skills';
import Projects from './ProjectsPage/Projects';
import Section1 from './ProjectsPage/Section1';
import Section2 from './ProjectsPage/Section2';
import Section3 from './ProjectsPage/Section3';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarCom/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/projects' element={<Projects/>}>
            <Route path='section1' element={<Section1/>}/>
            <Route path='section2' element={<Section2/>}/>
            <Route path='section3' element={<Section3/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Skills/> */}

    </>
  )
}

export default App
