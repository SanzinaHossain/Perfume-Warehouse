import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const {id}=useParams();
    const [items,setItems]=useState({});
    useEffect(()=>{
      fetch(`http://localhost:5000/items/${id}`)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])
  return (
    <div>
       
    </div>
  )
}

export default ManageItem