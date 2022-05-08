import React from 'react'
import './Item.css'
const Item = ({t}) => {
    const {id,name,img,price,description,quantity,Supplier}=t;
  return (
    <div className='item container'>
        <img className="w-100"src={img} alt=""/>
        <h2 className='mt-3'>{name}</h2>
        <h4>Price:{price}</h4>
        <h4>Quantity:{quantity}</h4>
        <h4>Supplier Name:{Supplier}</h4>
        <p>{description}</p>
        <button className='btn btn-warning mb-2'>Manage Item</button>
    </div>

  )
}

export default Item