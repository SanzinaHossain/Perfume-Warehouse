import React from 'react'
import "./Brand.css"
import pic1 from "../../Images/Brand/pic-1.webp"
import pic2 from "../../Images/Brand/pic-2.webp"
import pic3 from "../../Images/Brand/pic-3.webp"
import pic4 from "../../Images/Brand/pic-4.webp"
import pic5 from "../../Images/Brand/pic-5.webp"
const Brand = () => {
  return (
    <div className='mb-5'>
        <h1 className='text-center text-danger mt-3 mb-5'>Top Perfume & Cologne Brands</h1>
    <div className='brand'>
      <div className=' item-brand container brand-box'>
        <img className="w-100 h-100 brand-box-img"src={pic1} alt=""/>
       </div>
       <div className='item-brand container brand-box'>
        <img className="w-100 h-100 brand-box-img"src={pic2} alt=""/>
       </div>
       <div className='item-brand container brand-box'>
        <img className="w-100 h-100 brand-box-img"src={pic3} alt=""/>
        
       </div>
       <div className='item-brand container brand-box'>
        <img className="w-100 h-100 brand-box-img"src={pic4} alt=""/>
        
       </div>
       <div className='item-brand container brand-box'>
        <img className="w-100 h-100 brand-box-img"src={pic5} alt=""/>
        
       </div>
      
        </div>
    </div>
  )
}

export default Brand