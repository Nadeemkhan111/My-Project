import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


const TableList = () => {
    const[data,setData]=useState([])
    const[sr,setsr]=useState("")
    const[name,setName]=useState("")
    const[mobile,setMobile]=useState("")
    const[city,setCity]=useState("")

    const handleAdd=()=>{
        setData([...data,{sr,name,mobile,city}])
    }
    return (
        <div>
            <input type="text" placeholder='SR.No'onChange={(e)=>setsr(e.target.value)} />
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='City'onChange={(e)=>setCity(e.target.value)}/>
            <input type="text" placeholder='Mobile No'onChange={(e)=>setMobile(e.target.value)}/>
            <button onClick={handleAdd}>ADD</button>
            <Table>
                <thead>
                    <tr>
                        <th>SR NO.</th>
                        <th>NAME</th>
                        <th>MOBILE NO</th>
                        <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>{
                            return(
                            
                    <tr>
                        <td>{item.sr}</td>
                        <td>{item.name}</td>
                        <td>{item.mobile}</td>
                        <td>{item.city}</td>
                    </tr>
                    )}) }
                </tbody>
            </Table>
        </div>
    );
};

export default TableList;