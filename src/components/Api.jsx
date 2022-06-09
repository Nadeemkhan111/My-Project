import React,{useEffect, useState} from "react"
    
import axios from "axios"


export const Api=()=>{
    const[data,setData]=useState([])

    const getdata=async()=>{
        const Api=await axios.get("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev")
        console.log(Api)
        setData([...Api.data.body.data])
    }
    useEffect(()=>{
            getdata()
    },[])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SR No.</th>
                        <th>User Id</th>
                        <th>Camera Type</th>
                        <th>Activity</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,key)=>{
                            return(
                                <tr>
                                    <td>{key + 1}</td>
                                    <td>{item.UserID}</td>
                                    <td>{item.CameraType}</td>
                                    <td>{item.LastActivityTime}</td>
                                    <td><img src={item.SnapshotSignedUrl}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}