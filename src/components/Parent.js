import React,{useState} from "react";
import  "./State1.css";
import Child from "./Child";
const Parent=()=>{
return(
    <>
    <Child key1={"react"}
        key2={100}
        key3={true}
        key4={[100,200,300,400]}
        key5={{key1:"hello1",key2:"hello2"}}
        key6={[{id:1,name:"person1",salary:10000},
        {id:2,name:"person2",salary:20000},
        {id:3,name:"person3",salary:30000} ]}
    
    
    
    
    
    ></Child>
    </>
)
}
export default Parent;