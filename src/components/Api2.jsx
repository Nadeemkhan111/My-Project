import axios from "axios"
import React, { useEffect, useState } from "react"
export const Api2=()=>{
    const[data,setData]=useState([])
    const getData=async()=>{
        const Api=await axios.get("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch")
        console.log(Api)
        setData([...Api.data.data])
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>States</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item)=>{
                            return(
                    <tr>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.city}</td>
                        <td>{item.email}</td>
                        <td>{item.states}</td>
                        <td>{item.pincode}</td>
                    </tr>
                    )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}