import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ShowDataTable from '../ShowDataTable/ShowDataTable'

const Alldata = () => {
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/items')
         .then(res=>res.json())
         .then(data=>setItems(data))
    },[])
  return (
    <div className='container'>
        <div className='mt-2'>
            <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Supplier Name</th>
                <th>Delete Item</th>
                <th>Add Item</th>
              </tr>
            </thead>
            <tbody>
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