import React, { useState } from "react"

export const Suraj=({textSuraj,textChand,setTextSuraj})=>{
    const[text,setText]=useState("")
    return(
        <div>
            <h2>Suraj</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/> <br />
            <button onClick={()=>setTextSuraj([text,...textSuraj])}>Send</button><br />
            {
                textChand.map((item)=>(
                     {item}
                  ))}
        </div>
    )
}