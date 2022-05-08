import React from 'react'
import "./Ambassador.css"
import pic1 from "../../Images/Ambassador/pic-1.jpg"
import pic2 from "../../Images/Ambassador/pic-2.jpg"
import pic3 from "../../Images/Ambassador/pic-3.jpg"
const Ambassador = () => {
  return (
    <div className='mb-3'>
        <h1 className='text-center text-danger mt-3 mb-5'>Brand Ambassador List</h1>
    <div className='amb'>
      <div className='item container'>
        <img className="w-100"src={pic1} alt=""/>
        <h2 className='mt-3'>Anjelina Joli</h2>
        <p>Finding the right perfume for yourself can be tricky. Are you more of a sweet aroma? Maybe you're more of a deep smell like sandalwood and amber. There are just so many perfumes to choose from how can you possibly decide.</p>
       </div>
       <div className='item container'>
        <img className="w-100"src={pic2} alt=""/>
        <h2 className='mt-3'>Kit Harington</h2>
        <p>Finding the right perfume for yourself can be tricky. Are you more of a sweet aroma? Maybe you're more of a deep smell like sandalwood and amber. There are just so many perfumes to choose from how can you possibly decide.</p>
       </div>
       <div className='item container'>
        <img className="w-100"src={pic3} alt=""/>
        <h2 className='mt-3'>Charlize Theron</h2>
        <p>Finding the right perfume for yourself can be tricky. Are you more of a sweet aroma? Maybe you're more of a deep smell like sandalwood and amber. There are just so many perfumes to choose from how can you possibly decide.</p>
       </div>
        </div>
    </div>
  )
}

export default Ambassador