import React from 'react'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

const page = () => {
  return (
    <div>
        <Header />
        
      <div className=" text-center  p-[152px]">
        <h1 className=" text-2xl text-blue-500 font-extrabold">Contact Me</h1>
        <p>I`m Hasnain Ahmed me via email to :<a href='mailto:hasnainxahmed5656@gmail.com' className="text-blue-500 hover:text-pink-400">hasnainxahmed5656@gmail.com</a></p>
      </div>
     <Footer />
    </div>
  )
}

export default page
