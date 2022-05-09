import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./ManageItem.css";
const ManageItem = () => {
    const {id}=useParams();
    const [items,setItems]=useState({});
    useEffect(()=>{
      fetch(`http://localhost:5000/items/${id}`)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])
    const decreseitem=()=>{
      const{_id,img,price,name,quantity,supplier,description}=items;
      const url=`http://localhost:5000/items/${id}`;
      const value=quantity-1;
      const document={_id,img,price,name,value,supplier,description};
      //send to server side
      fetch(url,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(document)
      })
        .then(res=>res.json())
        .then(data=>{
            console.log("success",data);
            alert("user updated successfully")
         })
    }
  return (
    <div className='item container mt-3 box'>
        <img className="w-100"src={items.img} alt=""/>
        <h2 className='mt-3'>{items.name}</h2>
        <h4>Price:{items.price}</h4>
        <h4>Quantity:{items.quantity}</h4>
        <h4>Supplier Name:{items.Supplier}</h4>
        <p>{items.description}</p>
        <button onClick={decreseitem} className='btn btn-warning mb-2'>Delivery</button>
    </div>

  )
}

export default ManageItem