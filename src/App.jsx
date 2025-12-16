import React from 'react'
import NavBar from './Component/NavBar'
import Hero from './Component/Hero'
import HomeCards from './Component/HomeCards'

const App = () => {
  return (
  <>
  <NavBar/>
  <Hero title="Become Full-stack Web Developer" subTitle=" Learn the skills you need to become a professional web developer."/>
  <HomeCards/>
  </>
  )
}

export default App
