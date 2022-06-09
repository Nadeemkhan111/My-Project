import React,{useState} from "react"
import { Chand } from "./Chand"
import { Suraj} from "./Suraj"

export const Chat=()=>{
    const[textChand,setTextChand]=useState([])
    const[textSuraj,setTextSuraj]=useState([])
    return(
        <div className="chat">
            
            <Suraj textSuraj={textSuraj} setTextSuraj={setTextSuraj} textChand={textChand}/>
            <Chand textChand={textChand} setTextChand={setTextChand} textSuraj={textSuraj}/>
        </div>
    )
}