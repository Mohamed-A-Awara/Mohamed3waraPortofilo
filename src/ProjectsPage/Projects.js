import React from 'react'
import { Link , Outlet } from 'react-router-dom'
import backimg from "../imags/perspective-home-desk-white-frame.jpg"
import './Projects.css'
import { Container } from 'react-bootstrap'
import Section1 from './Section1'
function Projects() {
    
    return (
        <>
            <section className='project-style' style={{backgroundImage:`url(${backimg})`}}>
                <h2>My Projects</h2>
                <p>We Can see my Projects here</p>
                <Container>
                <nav>
                    <Link to='section1'>1st Section </Link>
                    <Link to='section2' className='noborder'>2nd Section </Link>
                    <Link to='section3' className='noright'>3rd Section </Link>
                </nav>
                <Outlet/>
                </Container>
                <Section1/> 
                
            </section>
        </>
    )
}

export default Projects
