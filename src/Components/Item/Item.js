import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Item.css'
const Item = ({t}) => {
    const {_id,name,img,price,description,quantity,Supplier}=t;
    const navigate=useNavigate();
    const navigatetoservicedetails=id=>{
      navigate(`/items/${id}`)
    }
  return (
    <div className='item container'>
        <img className="w-100"src={img} alt=""/>
        <h2 className='mt-3'>{name}</h2>
        <h4>Price:{price}</h4>
        <h4>Quantity:{quantity}</h4>
        <h4>Supplier Name:{Supplier}</h4>
        <p>{description}</p>
        <button onClick={()=>navigatetoservicedetails(_id)} className='btn btn-warning mb-2'>Manage Item</button>
    </div>

  )
}

export default Item