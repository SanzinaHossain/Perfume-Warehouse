import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id}=useParams();
    //console.log(id);
    const [items,setItems]=useState({});
    useEffect(()=>{
      fetch(`http://localhost:5000/items/${id}`)
      .then(res=>res.json())
      .then(data=>setItems(data))
    },[])
    const navigate=useNavigate();
    const navigatetoservicedetails=id=>{
      navigate(`/manageitem/${id}`)
    }
  return (
    
    <div className='text-center mt-5'>
        {/* <Link to="/manageitem"> */}
          <button onClick={()=>navigatetoservicedetails(id)}className='btn btn-primary'>Proceed Manage Item</button>
        {/* //</Link> */}
    </div>
  )
}

export default ItemDetails