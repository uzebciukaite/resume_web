import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import {FaSmile} from 'react-icons/fa'
import SingleResumeBox from './SingleResumeBox'
import {FaBriefcase, FaGraduationCap} from 'react-icons/fa'
const Resume = () => {


  const educationDetails = [
    {
      year: "2022 March - 2022 September",
      place: "CodeAcademy, Vilnius, Lithuania",
      subject: "Front-End developer",
      areas: [
        {
          title: "HTML",
          description: "HTML structure, elements, attributes, tags etc."
        },
        {
          title: "CSS and its preprocessors and frameworks",
          description: "Layout with flexbox and grid, positioning, pseudo-classes and combinators, transitions, animations. Responsive design. Worked with CSS preprocessors SASS and several CSS librararies - Bootstrap, React-Bootstrap."
        },
        {
          title: "Javascript",
          description: "ES6 code, DOM manipulation(creating, appending, removing, altering elements, adding classes, attributes, adding text/HTML content), event handling, working with asynchronous functions, import/export modules.",
        },
        {
          title: "Typescript",
          description: "Writing Javascript code using static typing in Typescript syntax.",
        },
        {
          title: "React.JS",
          description: "Creating reusable functional components, react hooks, different types of state management (useState, useContext and useReducer), routers, data handling with Fetch API.",
        },
        {
          title: "Node.JS",
          description: "Connecting front-end application with back-end with ExpressJS. Connecting back-end with database MongoDB and executing CRUD operations. Managing Sessions using Express Session module. Creating real time applications with Socket.io. Creating desktop-suite applications with ElectronJS. Web scraping using Axios and Cheerio.",
        },
        {
          title: "Version control systems",
          description: "Working with version control system Github. Initiating repositories, staging/unstaging changes, commiting, pushing changes to repository, resolving and merging conflicts.",
        },
        {
          title: "Googling",
          description: "Mastering googling technique and thus never having unsolved problems :)",
        },
      ]
    },
    {
      year: "2016 September - 2017 June",
      place: "Nanjing Normal University, Nanjing, China",
      subject: "Chinese Studies",
      areas: [
       {
        title: "Student exchange program",
        description: "Student exchange program in Chinese Culture and language studies awarded by Lithuanian Education Exchanges Support Foundation and Chinese Government."
       }
      ]
      
    },
    {
      year: "2014 September - 2018 June",
      place: "Vilnius University, Vilnius, Lithuania",
      subject: "Bachelor's degree, Chinese Studies",
      areas: [
        {
          title: "Chinese studies",
          description: "Chinese cultural studies and Mandarin Chinese."
        }
      ]
    }
    
  ]

  const experienceDetails = [
     {
      year: "2019 February - 2021 April",
      place: "SEB Global Services, Vilnius, Lithuania",
      subject: "Bank Operation Specialist",
      areas: [
        {
          title: "Work details",
          description: "Ensuring smooth day-to-day banking operations such as closure of customer accounts or other banking services, money transfers etc. Customer support."
        }
      ]
    },
     {
      year: "2021 April - 2022 February",
      place: "SEB Global Services, Vilnius, Lithuania",
      subject: "Senior Bank Operation Specialist",
      areas: [
        {
          title: "Work details",
          description: "Leading teams risk management meetings.Tutoring newcomers, participating in departments Tutors community, creating and adopting new practices allowing to ensure smoother and quicker adaptation. Participating in process automation and development activities."
        }
      ]
    },

  ]


  return (
    <Container id="resume" className='w-100 d-flex flex-column gap-5 py-5'>
      <h2 className='text-start pt-5'>Education</h2>
      <div className='w-80 d-flex flex-column '>
          {educationDetails.map((x, i) => <SingleResumeBox x={x} Icon={FaGraduationCap}/>)}
      </div>
      <h2 className='text-start pt-5'>Work Experience</h2>
      <div className='w-80 d-flex flex-column '>
        
        {experienceDetails.map((x, i) => <SingleResumeBox x={x} Icon={FaBriefcase}/>)}
      </div>
<div className='w-100 d-flex py-5 skillMedia'>
  <div className='w-50 d-flex flex-column gap-3 border-start border-5 border-light px-4 '>
    <h2 className='text-start pb-5'> Languages</h2>
    <div className='d-flex'> 
      <p className='fw-bold w-50 text-start'>Lithuanian</p>
      <p className='text-end w-50 me-4'>Native proficiency</p>
    </div>
    <div className='d-flex'>
      <p className='fw-bold w-50 text-start'>English</p>
      <p className='text-end w-50 me-4'>Professional working proficiency</p>
    </div>
    <div className='d-flex'>
      
      <p className='fw-bold w-50 text-start'>Chinese</p>
      <p className='text-end w-50 me-4'>Limited working proficiency</p>
    </div>
    <div className='d-flex'>
      
      <p className='fw-bold w-50 text-start'>Swedish</p>
      <p className='text-end w-50 me-4'>Elementary proficiency</p>
    </div>
  </div>
  <div className='w-50  d-flex flex-column gap-3 border-start border-5 border-light px-4 '>
    <h2 className='text-start pb-5'> Skills</h2>
    <div >
      <div className='d-flex'>
        <p className='fw-bold w-50 text-start'>Hard skills</p>
        <div className='text-end w-50 me-4'>
          <p> Computer Skills</p>
          <p> Programming Skills</p>
          <p> Tutoring skills</p>
          <p> Presentation skills</p>
        </div>
      </div>
      <div  className='d-flex mt-3'>
        <p className='fw-bold w-50 text-start'>Soft skills</p>
        <div className='text-end w-50 me-4'>
        <p>Work ethic</p>
        <p>Problem-solving</p>
        <p>Time management</p>
        <p> Teamwork</p>
        </div>
        
      </div>
    </div>
  </div>
   
</div>
      
      

    </Container>
  )
}

export default Resume