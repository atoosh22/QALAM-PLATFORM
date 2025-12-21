import React from 'react'
import Hero from '../Component/Hero'
import HomeCards from '../Component/HomeCards'
import Courses from '../Component/Courses'
import ViewAllCourses from '../Component/ViewAllCourses'

const HomePage = () => {
  return (
    <>
     <Hero title="Become Full-stack Web developer" subTitle=" Learn the skills you need to become a professional web developer."/>
     <HomeCards/>

     <Courses isHome={true}/>
     <ViewAllCourses/>
    </>
  )
}

export default HomePage
