// import React,{useState,useEffect} from "react"
// import { Card, CardContent, Table, TableBody, TableHead, TableRow } from "@mui/material"
// import axios from "axios"
// export const ApiCard=()=>{
//     const[data,setData]=useState([])
//     const getdata=async()=>{
//         const Apidata=await axios.get("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev")
//         setData([...Apidata.data.body.data])
//     }
//     useEffect(()=>{
//         getdata()

//     },[])
//     return(
//         <div>
//             <Card>
//                 <CardContent>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <th>SR.NO</th>
//                                 <th>USER ID</th>
//                                 <th>ACTIVITY</th>
//                                 <th>IMAGE</th>
//                                 <th>CAMERA</th>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {
//                                 data.map((item,key)=>{
//                                     return(
//                                         <TableRow>
//                                             <td>{key+1}</td>
//                                             <td>{item.UserID}</td>
//                                             <td>{item.LastActivityTime}</td>
//                                             <td> <img src={item.SnapshotSignedUrl} alt="" /> </td>
//                                             <td>{item.CameraType}</td>
//                                         </TableRow>
//                                     )
//                                 })
//                             }
//                         </TableBody>
//                     </Table>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }





import React,{useState,useEffect} from "react"
import { Card, CardContent, Table, TableBody, TableHead, TableRow } from "@mui/material"
import axios from "axios"
export const ApiCard=()=>{
    const[data,setData]=useState([])
    const getdata=async()=>{
        const Apidata=await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData([...Apidata.data])
    }
    useEffect(()=>{
        getdata()

    },[])
    return(
        <div>
            <Card>
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                
                                <th>ID</th>
                                <th>TITLE</th>
                                <th>BODY</th>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                data.map((item)=>{
                                    return(
                                        <TableRow>
                                    
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}