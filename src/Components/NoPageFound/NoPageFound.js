import React from 'react'
import pic from "../../Images/promises/pic-3.jpg"
import "./NoPageFound.css"
const NoPageFound = () => {
  return (
    <div className='container'>
        <img className="error mt-5" src={pic} alt=""></img>
    </div>
  )
}

export default NoPageFound