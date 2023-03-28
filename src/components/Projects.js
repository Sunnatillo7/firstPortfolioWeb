import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Col, Container, Row, Tab } from 'react-bootstrap'
import ProjectCard from './ProjectCard';
import projImg1 from "../Assets/Images/project-img1.png"
import projImg2 from "../Assets/Images/project-img2.png"
import projImg3 from "../Assets/Images/project-img3.png"
import colorSharpe2 from "../Assets/Images/color-sharp2.png" 
import "animate.css"
import TrackVisibility from 'react-on-screen';

function Projects() {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        }
    ]
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible}) =>
                            <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus blanditiis suscipit voluptatem molestiae est perspiciatis facilis sequi officia alias iusto voluptates, culpa pariatur, totam fugit quia exercitationem reiciendis reprehenderit? Quae!</p>
                                </div> }
                    </TrackVisibility>
                        <Tab.Container id='projects-tabs' defaultActiveKey="first">

                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link href="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((item, index)=>{
                                                return(
                                                   <ProjectCard 
                                                   key={index}
                                                    title={item.title}
                                                    description={item.description}
                                                   imgUrl={item.imgUrl}
                                                
                                                   />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loren ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharpe2} alt="colorSharpe" className='background-image-right' />
        </section>
    )
}

export default Projects
