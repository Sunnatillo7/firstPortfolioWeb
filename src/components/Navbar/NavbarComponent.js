import { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../Assets/Images/logo.svg"
import NavIcon1 from "../../Assets/Images/nav-icon1.svg"
import NavIcon2 from "../../Assets/Images/nav-icon2.svg"
import NavIcon3 from "../../Assets/Images/nav-icon3.svg"
import "../../Assets/main.css"

function NavbarComponent() {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)



    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar className={`${scrolled ? "scrolled" : ""}`} expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-togler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skils" className={activeLink === "skils" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skils")}>Skils</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("project")}>Projects</Nav.Link>

                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="#">
                                <img src={NavIcon1} alt="icons" />

                            </a>
                            <a href="#">
                                <img src={NavIcon2} alt="icons" />
                            </a>
                            <a href="#">
                                <img src={NavIcon3} alt="icons" />

                            </a>
                        </div>
                        <button className='vvd' onClick={() => console.log("Connect")}>
                            <span>
                                Lets connect
                            </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;