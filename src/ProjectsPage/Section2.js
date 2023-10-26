import React from 'react'

import './Projects.css'
import formphoto from '..//imags/formphoto.png'
import { Col, Form, Image, Row } from 'react-bootstrap'
function Section2() {
    return (
        <>
            <section className='form-style'>
                <div className='img-info'>
                    <Image src={formphoto} />
                </div>
                <div className='form-data'>
                    <h1>Get In Touch</h1>
                    <Form>
                        <Row style={{rowGap:"15px"}}>
                            <Col xl='6' xs='12'>
                                <Form.Control placeholder='First Name : ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='6' xs='12'>
                                <Form.Control placeholder='Last Name : ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='6' xs='12'> 
                                <Form.Control placeholder='Your Email :  ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='6' xs='12' >
                                <Form.Control placeholder='Phone Number :  ' className='input-data'></Form.Control>
                            </Col>
                            <Col xl='12' xs='12'>
                            <Form.Control as="textarea" rows={6} placeholder='Your Message...'  className='msg-input'/>
                            </Col>
                            <Col> 
                                <button className='btn-send'>Send</button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default Section2
