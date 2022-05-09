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
      <div className='item container brand-box'>
        <img className="w-100 h-50 brand-box-img"src={pic1} alt=""/>
        <p>Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.</p>
       </div>
       <div className='item container brand-box'>
        <img className="w-100 h-50 brand-box-img"src={pic2} alt=""/>
        <p>Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.</p>
       </div>
       <div className='item container brand-box'>
        <img className="w-100 h-50 brand-box-img"src={pic3} alt=""/>
        <p>Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.Perfumes are made when a carefully created blend of essential scented oils are mixed in solvents – typically alcohol and water.</p>
       </div>
      
        </div>
    </div>
  )
}

export default Brand