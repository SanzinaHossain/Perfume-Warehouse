import React from 'react'
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';

const Additem = () => {
    const { register, handleSubmit}=useForm();
  const onSubmit = data => {
      console.log(data);
      const url=`http://localhost:5000/items`;
      fetch(url,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
      })
  }
  return (
    <div className='mx-auto w-50 bg-dark p-4 mt-4'>
    <h1 className='text-center mb-5 text-white '>Please add some Perfume Item</h1>
    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
         <input className='mb-2' placeholder='Image URL' {...register("img")} />
         <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
         <input className='mb-2' placeholder='Name' {...register("name")} />
         <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
         <input className='mb-2' placeholder='Supplier Name' {...register("Supplier")} />
         <input className='mb-2' placeholder='Description' {...register("description")} />
         <input className="btn btn-warning" type="submit" value="Add Items" />
    </form>
</div>
  )
}

export default Additem