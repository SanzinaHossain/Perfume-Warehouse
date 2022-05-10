import React, { useEffect, useState } from 'react'

const MyitemsData = ({t}) => {
    const {_id,email,name,quantity,price,Supplier}=t;
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/items')
         .then(res=>res.json())
         .then(data=>setItems(data))
    },[])
    const deleteitem=id=>{
        const proceed=window.confirm('Are you sure?')
      if(proceed)
      {
          const url=`http://localhost:5000/items/${id}`;
          fetch(url,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
              console.log(data);
              document.location.reload(true);
              const remain=items.filter(s=>s._id!=id);
              setItems(remain)
          })
      }
    }
  return (
    <tr>
      <td>{email}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{Supplier}</td>
      <td><button onClick={()=>deleteitem(t._id)} className='btn btn-warning mb-2'>Delete</button>
      </td>
    </tr>
  )
}

export default MyitemsData