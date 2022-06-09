import { TextField } from "@mui/material"
import React,{useState,useEffect} from "react"

export const SearchBar=()=>{
    const Days=["Monday","Tuesday","Wednessday","Thrusday","Friday","Saturday","Sunday"]
    const[text,setText]=useState("")
    const[list,setList]=useState([])

    useEffect(()=>{
        const filtered=Days.filter((elem)=>elem.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        setList([...filtered])
    },[text])
    return(
        <div>
            {/* <input type="text" placeholder="Search Day" onChange={(e)=>setText(e.target.value)}  /> */}
            <TextField type="text" placeholder="Search Day" onChange={(e)=>setText(e.target.value)}  />
            <ul>
                {
                list.map((item)=>{
                    return(
                        <li>{item}</li>
                    )
                })
                }
            </ul>
        </div>
    )
}