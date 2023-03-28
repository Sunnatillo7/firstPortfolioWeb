import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MailChimpForm from './MailChimpForm'
import Logo from "../Assets/Images/logo.svg"
import NavIcon1 from "../Assets/Images/nav-icon1.svg"
import NavIcon2 from "../Assets/Images/nav-icon2.svg"
import NavIcon3 from "../Assets/Images/nav-icon3.svg"

function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row>
               <MailChimpForm/>
               <Col sm={6}>
               <img src={Logo} alt="Footer logo" />
               </Col>
               <Col className='text-center text-sm-end' sm={6}>
                <div className='social-icon'>
                    <a  href="">
                        <img src={NavIcon1} alt="Icon" />
                        
                    </a>
                    <a  href="">
                        <img src={NavIcon2} alt="Icon" />
                        
                    </a>
                    <a  href="">
                        <img  src={NavIcon3} alt="Icon" />
                        
                    </a>
                </div>
                <p>
                    Copy Right 2022,  All right Reserved
                </p>

               </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer