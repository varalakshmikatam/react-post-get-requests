import {useState} from"react";
const CondRendaring=()=>{
const [bool,setBool]=useState(false);
const [str1,setStr1]=useState("hello");
const [str2,setStr2]=useState("welcome");
const fun_one=()=>
{
setBool(bool=>!bool);
};
return(
    <>


    <button onClick={fun_one}>change</button>
    {
        bool?<h1>{str1}</h1>:<h1>{str2}</h1>
    }
    </>
)
}
export default CondRendaring;