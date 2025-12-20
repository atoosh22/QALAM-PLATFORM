import React from 'react'

const Hero = ({title, subTitle}) => {
  return (
   <>
 <div class="bg-indigo-700 py-32 text-white  text-center">
    <h1 class="text-3xl md:text-5xl font-bold">
      Become <span class="text-orange-500">Full Stack</span> Web Developer
    </h1>
    <p class="font-light text-lg md:text-2xl mt-2">
      Learn the skills you need to become a professional web developer.
    </p>
  </div>

   </>
  )
}

export default Hero
