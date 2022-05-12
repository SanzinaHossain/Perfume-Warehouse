import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import "./ManageItem.css";
const ManageItem = () => {
  const { register, handleSubmit}=useForm();
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
      let value=quantity-1;
      //send to server side
      fetch(url,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({quantity:value})
      })
        .then(res=>res.json())
        .then(data=>{
            setItems({...items,quantity:value})
         })
    }
    const handlequantity = event => {
      const{_id,img,price,name,quantity,supplier,description}=items;
      event.preventDefault();
      const qtn=parseInt(event.target.quantity.value);
      let value=parseInt(quantity)+qtn;
      const url=`http://localhost:5000/items/${id}`;
      fetch(url,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({quantity:value})
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
          setItems({...items,quantity:parseInt(quantity)+(qtn)});
      })
    }
  return (
    <div className='item container mt-3 box mb-3'>
        <img className="w-100"src={items.img} alt=""/>
        <h2 className='mt-3'>{items.name}</h2>
        <h4>Price:{items.price}</h4>
        <h4>Quantity:{items.quantity}</h4>
        <h4>Supplier Name:{items.Supplier}</h4>
        <p>{items.description}</p>
        <button onClick={decreseitem} className='btn btn-warning mb-2'>Delivery</button>
        <div>
          <form className='d-flex flex-column' onSubmit={handlequantity}>
         <input type="number" name="quantity" id="" placeholder='Update Quantity' />
           <input className='btn btn-warning mt-3 mb-2' type="submit" value="Update Quantity" />
        </form>
        </div>
    </div>

  )
}

export default ManageItem