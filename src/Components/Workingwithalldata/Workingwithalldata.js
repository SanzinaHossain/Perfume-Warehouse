import React from 'react'
import { useNavigate } from 'react-router-dom';

const Workingwithalldata = () => {
    const navigate=useNavigate();
    const navigatetoservicedetails=()=>{
      navigate(`/alldata`);
    }
    const additem=()=>{
        navigate(`/additem`)
    }
  return (
    <div className='w-50 mx-auto'>
        
        <button onClick={navigatetoservicedetails}className='btn btn-warning mb-2 '>Manage All Items.......</button>
    </div>
  )
}

export default Workingwithalldata