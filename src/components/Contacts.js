import React from 'react'
import { Container, Image, Button } from 'react-bootstrap'

import {FaPhoneAlt, FaLinkedin} from 'react-icons/fa'
import {MdEmail } from 'react-icons/md'

const Contacts = () => {
  return (
    <Container id='contacts' className='home w-100 d-flex flex-column gap-5 py-5 text-light'>
             <h2 className='w-100 text-start'>Contact me!</h2>

      <div className='d-flex flex-column gap-5'>  
       <div className='d-flex flex-column gap-3 border-start border-5 border-light px-4 fs-5 w-25'>
           <FaLinkedin className='fs-3'/> 
            <p className='text-start'> www.linkedin.com/in/urtezebciukaite </p>
        </div> 
      <div className='d-flex flex-column gap-3 border-start border-5 border-light px-4 fs-5'>
           <FaPhoneAlt className='fs-4'/> 
            <p className='text-start' > +370 604 63 252</p>
        </div> 
      <div className='d-flex flex-column gap-3 border-start border-5 border-light px-4 fs-5'>
           <MdEmail className='fs-3'/> 
            <p className='text-start'> urtezeb@gmail.com</p>
        </div> 
     
      </div>
        
    </Container>

  )
}

export default Contacts