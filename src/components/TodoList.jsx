import React,{useState} from "react"
import { Button } from "@mui/material"



export const TodoList=()=>{
    const[text,setText]=useState("")
    const[data,setData]=useState([])
    const handleAdd=()=>{

        if(text !== ""){ 
        setData([...data,text])
        setText("")
         } }
    const handleDelte=(item)=>{
        const filtered=data.filter((value)=>value !== item)
        setData([...filtered])
    }
    return(
        <div>
            <input type="text" placeholder="Add List" onChange={(e)=>setText(e.target.value)} />
            {/* <TextField type="text" placeholder="Add List" onChange={(e)=>setText(e.target.value)}/> */}
            
            <Button onClick={handleAdd}>ADD</Button>
            <ul>
                {
                    data.map((item)=>{
                        return(
                            <li>{item}<Button onClick={()=>handleDelte(item)}>DELETE</Button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

