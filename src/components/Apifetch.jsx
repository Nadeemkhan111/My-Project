import React,{useState,useEffect} from "react"
import axios from "axios"

export const Apifetch=()=>{
    const[data,setData]=useState([])

    const getData=async()=>{
        const ApiData=await axios.get("https://jsonplaceholder.typicode.com/posts")
        setData(ApiData.data)
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <h1>API DATA</h1>
            {
                data.map((item)=>{
                    return(
                        <div>
                            <h2>{item.id}</h2>
                            <h2>{item.title}</h2>
                            <h2>{item.body}</h2>
                        </div>
                    )
                })
            }

        </div>
    )
}