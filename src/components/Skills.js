import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../Assets/Images/meter1.svg"
import meter2 from "../Assets/Images/meter2.svg"
import meter3 from "../Assets/Images/meter3.svg"
import colorSharpe from "../Assets/Images/color-sharp.png"
function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus cumque corrupti, recusandae quis ipsa vitae reiciendis a magni error saepe, rem distinctio doloribus totam unde quia ab eligendi eos.
                            </p>
                            <Carousel className='skill-slider' responsive={responsive} infinite={true} >
                                <div className="item">
                                    <img src={meter1} alt="img" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="img" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="img" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="img" />
                                    <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharpe} alt="colorImg" />
        </section>
    )
}

export default Skills
