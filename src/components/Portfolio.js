import React from 'react'
import {Container, Row, Col, Button, Card} from 'react-bootstrap'


const Portfolio = () => {
  return (
    <Container id="portfolio" className='w-100 py-5 text-light'> 
    <h2 className='text-start py-4'>Some of my current works</h2>
    <Row xs={1} md={2} lg={3} className=" bg-succes w-100 gap-3 d-flex flex-center" >  
    <Col className='imgWrapper'>
        <a href="https://uzebciukaite.github.io/react_landing_page/" target="_blank">
              <Card.Img className='h-100 w-100 rounded workImage' variant="top" src={require("../images/work3.png")} />
              <div className='imgContent w-100 h-100 rounded fs-5 fw-bold'>Landing page created with ReactJS</div>
        </a>
         </Col>
         <Col className='imgWrapper'>
          <a href="https://uzebciukaite.github.io/color_quiz/" target="_blank">
            <Card.Img className='h-100 w-100 rounded workImage' variant="top" src={require("../images/work1.png")} />
            <div className='imgContent w-100 h-100 rounded fs-5 fw-bold'>Quiz app created with ReactJS</div>
          </a>
      
    
         </Col>
         <Col className='imgWrapper'>
          <a href="https://uzebciukaite.github.io/react_shop_app/" target="_blank">
             <Card.Img className='h-100 rounded workImage' variant="top" src={require("../images/work2.png")} />
             <div className='imgContent w-100 h-100 rounded fs-5 fw-bold'>Shop app created with ReactJS and Redux</div>
          </a>
         </Col>
         <Col className='imgWrapper'>
         
          <a href="https://extraordinary-biscotti-befba4.netlify.app" target="_blank">
             <Card.Img className='h-100 rounded workImage' variant="top" src={require("../images/work4.png")} />
             <div className='imgContent w-100 h-100 rounded fs-5 fw-bold'>Dating app created with ReactJS, NodeJS, MongoDB, Express-session, socket.io</div>
          </a>
         </Col>
         <Col className='imgWrapper'>
         
          <a href="https://gregarious-custard-37f089.netlify.app" target="_blank">
             <Card.Img className='h-100 rounded workImage' variant="top" src={require("../images/work5.png")} />
             <div className='imgContent w-100 h-100 rounded fs-5 fw-bold'>Movie ticket purchase app created with ReactJS, NodeJS, MongoDB, socket.io</div>
          </a>
         </Col>
         



       </Row> 
    </Container>
  )
}

export default Portfolio