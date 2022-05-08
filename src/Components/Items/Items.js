import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import "./Items.css"
const Items = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/items')
         .then(res=>res.json())
         .then(data=>setItems(data))
    },[])
  return (
    <div>
        <div>
    <h1 className='items-title mt-5 mb-5'>Perfume Collection</h1>
     <div className='items-container'>
       {
         items.slice(0,6).map(t=><Item
         key={t._id}
         t={t}
         ></Item>)
       }
   </div>
   <br/>
  </div>
    </div>
  )
}

export default Items