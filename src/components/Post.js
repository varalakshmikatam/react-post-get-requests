import {useRef,useState} from "react";
import axios from "axios";
const Post=()=>{
    const box1=useRef("");
    const box2=useRef("");
    const [res,setRes]=useState({});

    const my_fun=()=>
    {
        axios.post(`https://reqres.in/api/user`,{'email':box1.current.value,'password':box2.current.value}).then((posRes)=>{
            const {data}=posRes;
            setRes(data);

        },(errRes)=>{
            console.log(errRes);
        });
    }
    return(
        <> 

        <input type={"text"} ref={box1}></input>
        <input type={"text"} ref={box2}></input>
        <button onClick={my_fun}>send</button>
        {
            Object.keys(res).length==0?(<div></div>):(<h1>{JSON.stringify(res)}</h1>)
        }
        </>
    )

}
export default Post;