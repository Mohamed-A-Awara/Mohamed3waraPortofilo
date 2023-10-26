import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub, FaLinkedin, FaWhatsapp,  } from "react-icons/fa";
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
function NavbarCom() {
    return (
        <Navbar expand="lg" className="nav-color" style={{zIndex:"1000"}}>
        <Container fluid style={{height:"70px" , zIndex:"1000"}}>
            <Navbar.Brand href="#" className='logo-style'>
                <NavLink to='/home' style={{textDecoration:"none"}}><span>Awara</span></NavLink>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='small-style'>
            <Nav className="me-auto my-2 my-lg-0 nav-style" style={{ maxHeight: '150px' }} navbarScroll>
                <Nav.Link >
                    <NavLink to='/home'>Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to='/skills'>Skills</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to='/projects'>Projects</NavLink>
                </Nav.Link>
            </Nav>
            <div className='social-media'>
                <Nav>
                    <Nav.Link href='https://www.linkedin.com/in/mohamed-ayman-20ba69219/' className='social-link'><FaLinkedin  /></Nav.Link>
                    <Nav.Link href='https://github.com/Mohamed-A-Awara' className='social-link'><FaGithub /></Nav.Link>
                    <Nav.Link href='#' className='social-link'><FaWhatsapp/></Nav.Link>
                </Nav>
            </div>
                <button className='btn-style'>Let's Connect</button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavbarCom;
;


