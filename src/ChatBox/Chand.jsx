import React, { useState } from "react"

export const Chand=({textChand,textSuraj,setTextChand})=>{
    const[text,setText]=useState("")
    return(
        <div>
            <h2>Chand</h2>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/> <br />
            <button onClick={()=>setTextChand([text,...textChand])}>Send</button> <br />
                {
                    textSuraj.map((item)=>(
                        {item}
                     ) )
                }
        </div>
    )
}