import React from 'react'
import './Projects.css'
import { Col, Container, Nav, Row } from 'react-bootstrap'
// import { Image, Nav } from 'react-bootstrap'
import ECommerce from '../imags/Project-ECommerce.png'
import ProjectTeam from '../imags/teamproject.png'
import homepage from '../imags/homepage.png'
import megastorephoto from '../imags/megastore.png'
import animationphoto from '../imags/animation.png'
import flowersphoto from '../imags/flowers.png'


function Section1() {
    const EProject = "https://mohamed-a-awara.github.io/E-Commerce-JS/"
    const Teams = "https://mohamed-a-awara.github.io/Ma3refa-Team/"
    const homelink = "https://mohamed-a-awara.github.io/Home-Design/"
    const megastoreLink = "https://mohamed-a-awara.github.io/Mega-Store/"
    const animationlink = "https://mohamed-a-awara.github.io/Animation-Project/"
    const flowerslink = "https://mohamed-a-awara.github.io/Flowers-Website/"
    return (
        <>
            <section className='worked'>
                <Nav>
                    <Container className='mt-4'>
                        <Row>
                            <Col xl='4' xs='8' className='Works-links'>
                                <Nav.Link href={EProject} className='imgstyle' style={{backgroundImage:`url(${ECommerce})`}}>
                                    <div className='over-content'>
                                        <div className='over-data'>
                                            <h3>E-Commerce Project</h3>
                                            <p>Using HTML CSS Bootstrap JS</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Col>
                            <Col xl='4' xs='8'  className='Works-links sm-de'>
                                <Nav.Link href={homelink} className='imgstyle' style={{backgroundImage:`url(${homepage})`}} >
                                    <div className='over-content'>
                                        <div className='over-data'>
                                            <h3>Home Design Page</h3>
                                            <p>Using HTML CSS Bootstrap</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Col>
                            <Col xl='4' xs='8'  className='Works-links' >
                                <Nav.Link href={Teams} className='imgstyle' style={{backgroundImage:`url(${ProjectTeam})`}}>
                                    <div className='over-content'>
                                        <div className='over-data'>
                                            <h3>Ma3refa Team Project</h3>
                                            <p>Using HTML CSS </p>
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Col>

                            <Col xl='4' xs='8'  className='Works-links botton' >
                                <Nav.Link href={megastoreLink} className='imgstyle' style={{backgroundImage:`url(${megastorephoto})`}}>
                                    <div className='over-content'>
                                        <div className='over-data'>
                                            <h3>Mega Store Project</h3>
                                            <p>Using HTML CSS Bootstrap JS</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Col>
                            <Col xl='4' xs='8'  className='Works-links botton'>
                                <Nav.Link href={animationlink} className='imgstyle' style={{backgroundImage:`url(${animationphoto})`}}>
                                    <div className='over-content'>
                                        <div className='over-data'>
                                            <h3>Animation Project</h3>
                                            <p>Using HTML CSS</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Col>
                            <Col xl='4' xs='8'  className='Works-links botton'>
                                <Nav.Link href={flowerslink} className='imgstyle' style={{backgroundImage:`url(${flowersphoto})`}}>
                                    <div className='over-content'>
                                        <div className='over-data'>
                                            <h3>Flowers Project</h3>
                                            <p>Using HTML CSS </p>
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Col>
                        </Row>
                    </Container>
                </Nav>
            </section>
        </>
    )
}

export default Section1
