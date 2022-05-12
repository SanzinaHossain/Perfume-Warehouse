import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import "./Items.css"
import Loading from '../../Shared/Loading/Loading';
const Items = () => {
    const [items,setItems]=useState([])
    const[isloading,setIsloading]=useState(true);
    useEffect(()=>{
        fetch('https://murmuring-plains-44040.herokuapp.com/items')
         .then(res=>res.json())
         .then(data=>{
           setIsloading(false);
           setItems(data)
         })
    },[])
  return (
    <div>
        <div>
    <h1 className='items-title mt-5 mb-5'>Perfume Collection</h1>
     <div className='items-container'>
       {isloading && <Loading></Loading>}
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