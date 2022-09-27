import React from 'react'
import { Container, Image, Button} from 'react-bootstrap'


const About = () => {

  


  return (
    <Container className='about d-flex flex-column '>

        <h2 className='text-start w-100 pb-5'>About me</h2>
       
        <p className='w-75 text-start'>
          I am outgoing person interested in learning foreign languages, brain battles/trivia games and enjoying long distance walks. 
          I am happy to say that a new career path which i decided to follow by learning Front-end Development became my new and biggest hooby. 
        </p>
        <p className='w-75 text-start'>
           Why Front-end Development? Everything about it is exciting. At first there was a joy to be able to make image with rounded corners or text centered in the middle of the page. And now excitment comes from achieving a result of fully functionable application. 
        </p>
        <p className='w-75 text-start'>
           But what thrills me most is the thought that programming is a never ending learning path. You will always have possibility to learn some new coding language or new CSS framework and thus be able to upgrade your code and projcets. 
        </p>
        <p className='w-75 text-start'> If you are want to have a passionate and motivated member in your team, do not hesitate to contact me!</p>
       
  
    </Container>
  )
}

export default About