import React,{useState} from "react"
import {Button, Card, CardContent, Grid, TextField} from "@mui/material"


export const TodoCard=()=>{
    const[text,setText]=useState("")
    const[list,setList]=useState([])
    const[text1,setText1]=useState("")
    const[list1,setList1]=useState([])
    const[text2,setText2]=useState("")
    const[list2,setList2]=useState([])
    const handleAdd=()=>{
        setList([...list,text])
    }
    const handleAdd1=()=>{
        setList1([...list1,text1])
    }
    const handleAdd2=()=>{
        setList2([...list2,text2])
    }
    const handleDelte=(elem)=>{
        const filtered=list.filter((item)=>item !==elem)
        setList(filtered)
    }
    return(
        <div>
            <Grid container>
                <Card >
                    <CardContent>
                    
                    <Card style={{float:"left", padding:"20px" ,margin:"20px"}}>
                        <TextField placeholder="search" onChange={(e)=>setText(e.target.value)}/>
                        <Button onClick={handleAdd}>Add</Button><br />
                    <ul>
                        {
                            list.map((item)=>{
                                return(
                                    <li>{item}<Button variant="outlined" color="error" onClick={()=>handleDelte(item)}>DELETE</Button></li>
                                )
                            })
                        }
                    </ul>
                    </Card>
                    <Card style={{float:"left", padding:"20px" ,margin:"20px"}}>
                        <TextField placeholder="search" onChange={(e)=>setText1(e.target.value)}/>
                        <Button onClick={handleAdd1}>Add</Button>
                    <ul>
                        {
                            list1.map((elem)=>{
                                return(
                                    <li>{elem}</li>
                                )
                            })
                        }
                    </ul>
                    </Card>
                    <Card style={{float:"left", padding:"20px" ,margin:"20px"}}>
                        <TextField placeholder="search" onChange={(e)=>setText2(e.target.value)}/>
                        <Button onClick={handleAdd2}>Add</Button>
                    <br/>
                    <ul>
                        {
                            list2.map((elem2)=>{
                                return(
                                    <li>{elem2}</li>
                                )
                            })
                        }
                    </ul></Card>
                    
                    
                    
                    
                    </CardContent>
                </Card>

            </Grid>
        </div>
    )
}   