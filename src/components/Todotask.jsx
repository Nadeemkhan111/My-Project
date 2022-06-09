import { TextField,Button } from "@mui/material"
import React, { useState } from "react"

export const Todotask=()=>{
    const[list,setList]=useState([])
    const[name,setName]=useState("")
    const[dis,setDis]=useState("")
    const[state,setState]=useState("")
    const[img,setImg]=useState("")
    const handleAdd=(()=>{
        setList([...list,name,dis,state,img])
    })
    return(
        <div className="todo">
            <TextField placeholder="Task Name" onChange={(e)=>setName(e.target.value)}/><br />
            <TextField placeholder="Discription" onChange={(e)=>setDis(e.target.value)}/><br />
            <TextField placeholder="States" onChange={(e)=>setState(e.target.value)}/><br />
            <TextField placeholder="Image" onChange={(e)=>setImg(e.target.value)}/><br /><br />
            <Button className="button" variant="contained" disableElevation onClick={handleAdd}>Submit</Button>
            <ul>
                {
                    list.map((item)=>{
                        return(
                            <p>{item}<Button>Complete</Button></p>
                        )
                    })
                }
                    
            </ul>
        </div>
    )
}