import React,{useState,useEffect} from 'react';

const SpeedMeter = () => {
    const[color,setColor]=useState("")
    const[dist,setDist]=useState(0)
    const[tim,setTim]=useState(0)

    useEffect(()=>{
        const speed=dist/tim
        speed<40 && setColor("Green")
        speed<50 && speed>40 && setColor("orange")
        speed>50 && setColor("red")
    },[])
    return (
        <div>
            Distance : <input type="text" placeholder='Distance' onChange={(e)=>setDist(e.target.value)}/> <br />
            Time     : <input type="text" placeholder='Time' onChange={(e)=>setTim(e.target.value)}/> 
        </div>
    );
};

export default SpeedMeter;