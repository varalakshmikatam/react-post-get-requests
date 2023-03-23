import { useState } from "react";
const Changestate=()=>
{
    const [num,setNum]=useState(0);
   const fun_one=()=>
    setNum((num)=>{
        return num+1;
    })
    const fun_two=()=>
    setNum((num)=>{
        return num-1;
    })
        

    

    return(
        <>
        
        <h1>Number:{num}</h1>
        <button onClick={fun_one}>Increment</button>
        <button onClick={fun_two}>Decrement</button>
        </>
    )
}
export default Changestate;