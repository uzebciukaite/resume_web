import React from 'react'
import {Container, Row, Col, Button, Card} from 'react-bootstrap'


const Portfolio = () => {
  return (
    <Container id="portfolio" className='w-100 py-5 text-light'> 
    <h2 className='text-start py-4'>Some of my current works</h2>
    <Row xs={1} md={2} lg={3} className=" bg-succes w-100" >  
    <Col>
        <a href="https://uzebciukaite.github.io/react_landing_page/" target="_blank">
              <Card.Img className='h-100 w-100 rounded' variant="top" src={require("../images/work3.png")} />
        </a>
         </Col>
         <Col>
          <a href="https://uzebciukaite.github.io/color_quiz/" target="_blank">
            <Card.Img className='h-100 w-100 rounded' variant="top" src={require("../images/work1.png")} />
          </a>
      
    
         </Col>
         <Col>
          <a href="https://uzebciukaite.github.io/react_shop_app/" target="_blank">
             <Card.Img className='h-100 rounded' variant="top" src={require("../images/work2.png")} />
          </a>
     
    
         </Col>
         



       </Row> 
    </Container>
  )
}

export default Portfolio