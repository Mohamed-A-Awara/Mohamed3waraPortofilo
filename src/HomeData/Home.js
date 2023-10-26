import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Image,  } from 'react-bootstrap';
import backimg from "../imags/perspective-home-desk-white-frame.jpg"
import backmyphoto from "../imags/mohamed-white-bg-removebg-preview.png"
import { useTypewriter ,Cursor} from 'react-simple-typewriter';
// import { FaGithub, FaLinkedin, FaWhatsapp,FaArrowRight } from 'react-icons/fa';
import "./Home.css"


function Home() {
    const [type] = useTypewriter({
        words: [' Developer',' Frontend Developer',' Backend Developer'],
        loop:{},
        typeSpeed:300,
        delaySpeed:100
    })
    const cv = ()=>{
        window.open("https://drive.google.com/drive/folders/1jAQc0JlPLK-QgLOHeRn2YuxirGsZz5YE", "My CV" , "width=1200,height=850")
    }

    return (
        <>
            <Container fluid className='home-style' style={{backgroundImage:`url(${backimg})`}}>
                <section className='parent'>
                    <div className='part-1 data'>
                        <h3>Welcome all in my portfolio</h3>
                        <h2 className='my-name'>Hi ! I'm <span>mohamed ayman awara</span></h2>
                        <h2 className='job-title'>I'm 
                        <span className='job-name'> 
                            {type}
                        </span>
                        <Cursor />
                        </h2> 
                        <p>hello everyone! i have 2 years experience in web development   </p>
                        <button className='btn-CV' onClick={cv}>Download CV</button>
                        
                    </div>
                    <div className='part-1 img-data'>
                        <div class="imgbox">
                            <div></div>
                            <Image src={backmyphoto} className='back-style'/>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Home
