import React from 'react'

const Hero = ({title, subTitle}) => {
  return (
    <>
      {/* <!-- ✅ Hero Section --> */}
  <div class="bg-[#07F49E] py-32 text-white  text-center">
    <h1 class="text-3xl md:text-5xl font-bold">
     {title}
    </h1>
    <p class="font-light text-lg md:text-2xl mt-2">
      {subTitle}
    </p>
  </div>
    
    </>
  )
}

export default Hero
