import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

const page = () => {
  return (
    <div>
    <Header />
    
  <div className=" text-center  h-72">
    <h1 className=" text-2xl text-blue-500">About Me</h1>
    <p>I`m Hasnain Ahmed , I am a Fersher Web Developer .I love working with modern web Technologies like 
        Next.js,React,Html,css,Talwind Css and Typescript
    </p>
  </div>
 <Footer />
</div>
  )
}

export default page
