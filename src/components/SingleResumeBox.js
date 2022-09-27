import React from 'react'
import {FaBriefcase, FaGraduationCap} from 'react-icons/fa'

const SingleResumeBox = ({x, Icon}) => {
  return (
     <div className='w-100 d-flex flex-column rounded-end  '>
    <div className='w-100 d-flex border-start border-5 border-light '>
      <div className='w-35 text-start ps-4 py-2 '>
        
        <Icon className='fs-3 mb-2'/>
        <p className='fw-bold fs-5 w-50'>{x.subject}</p>
      
        <p className='w-75'>{x.place}</p>
        <p className='w-75'> {x.year}</p>
            
            
      </div>
      
      <div className='py-5  w-65 d-flex flex-column text-start gap-4 rounded-end'>
      {x.areas.map(area => (
          <div className='d-flex flex-column w-100 pe-5'>
            <div className=' h-100 d-flex align-items-center justify-content-start'>
               <p className='m-0 fw-bold'>  {area.title} </p>
            </div>
            
            <p className='w-100 mx-auto my-1'>{area.description}</p>
          </div>
      ))}
    
      </div>
      
    </div>
    <div className='w-100 py-3 border-start border-light border-5'>
          
    </div>
    
      </div>
  )
}

export default SingleResumeBox