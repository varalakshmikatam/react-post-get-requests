import { useState } from "react";
const Changestate1=()=>
{
    const [count,setCount]=useState(0);
    const my_fun=()=>
    {
        setCount(count+1);
        setCount(count+1);
    }
    const fun_two=()=>
    {
        setCount(count-1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={my_fun}>change</button>
        <button onClick={fun_two}>decr</button>
        </>
    )
}
export default Changestate1;