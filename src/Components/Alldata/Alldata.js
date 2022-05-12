import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ShowDataTable from '../ShowDataTable/ShowDataTable'
import Loading from "../../Shared/Loading/Loading";
const Alldata = () => {
    const [items,setItems]=useState([])
    const [isloading,setIsloading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/items')
         .then(res=>res.json())
         .then(data=>{
           setItems(data)
           setIsloading(false)
          })
    },[])
  return (
    <div className='container'>
        <div className='mt-2'>
            <Table striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr>
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
              items.map(t=><ShowDataTable
                key={t._id}
                t={t}
                ></ShowDataTable>)
              }
              </tbody>
              </Table>
            
    </div>
    </div>

  )
}

export default Alldata