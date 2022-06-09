import React, { useState } from "react"

export const TodoList1=()=>{
    const[text,setText]=useState("")
    const[list,setList]=useState([])
    const handleAdd=()=>{
        setList([...list,text])
    }
    const handleDelete=(item)=>{
        const filtered=list.filter((elem)=>elem !==item)
        setList(filtered)
    }
    return(
        <div>
            <input type="text" placeholder="Add List" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>

            <ul>
                {
                    list.map((item)=>{
                        return(
                            <li>{item}<button onClick={()=>handleDelete(item)}>DELETE</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}