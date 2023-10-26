import React  , {}from 'react'
import './Skills.css'
import backimg from "../imags/perspective-home-desk-white-frame.jpg"
import { Col, Container, Row,  } from 'react-bootstrap'
import Barprogress from './Barprogress'

function Skills() {
    return (
        <>
            <section className='skills-style' style={{backgroundImage:`url(${backimg})`}}>
                <h2>My Skills</h2>
                <p>We Can see my skills here</p>
                <Container style={{backgroundColor:"",height:"55vh",borderRadius:"120px" , color:""}}>
                    <Row>
                        <div className='small'>
                        <Col>
                            <Barprogress/>
                        </Col>
                        </div>
                    </Row>
                </Container>
            </section>
            
        </>
    )
}

export default Skills
