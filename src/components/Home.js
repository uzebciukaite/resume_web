import React from 'react'
import { Container, Image, Button } from 'react-bootstrap'


const Home = () => {
  return (
    <Container id="home" className=' d-flex flex py-5 home '>
        <div className='w-50 d-flex flex-column align-items-start justify-content-center'>
         <h2 className='w-50 text-start pb-5'>Hello, I'm Urte!</h2>
        <p className='w-75 text-start fs-5' > Ambitious and motivated junior Front-end Developer,
        excited to start my career in software engineering.
        </p>
        
        </div>
       
        <div className='w-50 mainImg flex-center '>
        <Image className='rounded-circle  '
         src={require("../images/profile_picture.jpg")}
        >
        </Image>
        </div>
        
        
    </Container>
  )
}

export default Home