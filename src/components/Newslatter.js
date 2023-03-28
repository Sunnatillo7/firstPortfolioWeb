import React, { useState } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useEffect } from 'react';

 function Newslatter({ onValidate, status, message }) {
    const [email, setEmail] = useState("")

  useEffect(()=>{
  if(status === "success") clearFild()
  }, [status])
    const handleSubmit = (evt) => {
        evt.preventDefault()
        email &&
         email.indexOf("@") > -1 &&
         onValidate({
            EMAIL : email
         })
    }

    const clearFild =()=>{
        setEmail("")
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col lg={12} nd={6} xl={5}>
                        <h3>
                            Subscribe to our Newsletter
                        </h3>
                        {status === "sending" && <Alert>Sending...</Alert>}
                        {status === "error" && <Alert variant='danger'>{message}</Alert>}
                        {status === "success" && <Alert variant='success'>{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className='new-email-bx'>
                                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email address" value={email} type="email" />
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
export default Newslatter
