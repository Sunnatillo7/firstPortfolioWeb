import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import HeaderImg from "../Assets/Images/header-img.svg"
import 'animate.css';
import TrackVisibility from "react-on-screen"
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDelating, setIsDelating] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDelating ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updateText)
        if (isDelating) {
            setDelta(prev => prev / 2)
        }

        if (!isDelating && updateText === fullText) {
            setIsDelating(true)
            setDelta(period)

        } else if (isDelating && updateText === "") {
            setIsDelating(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcom to my Portfolio</span>
                                <h1>{`Hi I'm webdecode`} <span className="wrap">{text}</span></h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quasi? Debitis in ipsa repudiandae aspernatur labore vitae esse veniam beatae soluta aliquam amet neque mollitia earum, nulla tempora. Explicabo, est!</p>
                                <button onClick={() => console.log("connect")}>Let`s connect <ArrowRightCircle size={25} /></button>
                            </div> }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={HeaderImg} alt="Header img" />

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
