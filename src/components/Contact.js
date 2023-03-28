import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from "../Assets/Images/contact-img.svg"

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: '',
    message: ""
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [btnText, setBtnText] = useState("Send")
  const [status, setStatus] = useState({})

  const onFormUpdate =(category, value)=>{
    setFormDetails({
      ...formDetails,
      [category] : value
    })
  }

    const handleSubmit = async (evt)=>{
     evt.preventDefault()
     setBtnText("Sending...")
     let res = await fetch("http://localhost:5000/contact", {
      method : 'POST',
      headers :{
       "Content-Type" : "Application/json;charset=utf-8",
      },
      body :JSON.stringify(formDetails)
     })
     setBtnText('Send')
     let result = res.json()
     setFormDetails(formInitialDetails)
     if(result.code === 200){
      setStatus({success : true, message : "Message sent successfully"})
     }else{
      setStatus({success : false, message : "Something is wrong please check all again"})
     }
    }
  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt="constactImg" />
          </Col>
          <Col md={6}>
          <h2>Get in touch</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col className='px-2' sm={6}>
                <input type="text" placeholder='First Name' value={formDetails.firstName} onChange={(e)=>onFormUpdate("firstname", e.target.value)} />
              </Col>
              <Col className='px-2' sm={6}>
              <input type="text" placeholder='Last Name' value={formDetails.lastName} onChange={(e)=>onFormUpdate("lastname", e.target.value)} />
              </Col>
              <Col className='px-2' sm={6}>
              <input type="email" placeholder='Email Name' value={formDetails.email} onChange={(e)=>onFormUpdate("email", e.target.value)} />
              </Col>
              <Col className='px-2' sm={6}>
              <input type="tel" placeholder='Phone Name' value={formDetails.phone} onChange={(e)=>onFormUpdate("phone", e.target.value)} />
              </Col>
              <Col>
              <textarea value={formDetails.message} placeholder="Message"  rows="6" onChange={(e)=>onFormUpdate("message", e.target.value)}></textarea>
              <button type='submit'><span>{btnText}</span></button>
              </Col>

              {
                status.message &&
                <Col>
                <p className={status.success === false ? "danger" : "success"}></p>
                </Col>
              }
            </Row>
          </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
