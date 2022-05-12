import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from "../../Shared/Loading/Loading";
import MyitemsData from '../MyitemsData/MyitemsData';
const MyItem = () => {
  const [user]=useAuthState(auth);
  const [isloading,setIsloading]=useState(true);
  const [items,setItems]=useState([]);
    useEffect(()=>{
        const url="https://murmuring-plains-44040.herokuapp.com/items";
        const e=user.email;
        fetch(url)
         .then(res=>res.json())
         .then(data=>{
            const d=data.filter(s=>s.email==e);
            console.log(d)
            setItems(d)
            setIsloading(false)
            })
    },[])
  return (
    <div>
      <div className='container'>
        <div className='mt-2'>
            <Table striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr>
                <th>Email</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Supplier Name</th>
                <th>Delete Item</th>
              </tr>
            </thead>
            <tbody>
              {isloading && <Loading></Loading>}
              {
              items.map(t=><MyitemsData
                key={t._id}
                t={t}
                ></MyitemsData>)
              }
              </tbody>
              </Table>
            
    </div>
    </div>
    </div>
  )
}

export default MyItem