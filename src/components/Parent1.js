import React,{useState} from "react";
import  "./State1.css";
import Child1 from  "./Child1";
const Parent1=()=>{
const [str,setStr]=useState("react");
const [num,setNum]=useState("100");
const [bool,setBool]=useState(true);
const [obj,setObj]=useState({key1:"hello1",key2:"hello2",key3:"Hello3"});
const [arr,setArr]=useState([100,200,300,400]);
const [emp,setEmp]=useState([{id:1,name:"person1",salary:10000},
                             {id:2,name:"person2",salary:20000},
                             {id:3,name:"person3",salary:30000}  ]);

                             return(
                                <>
                                const str={str}
                                const num={num}
                                const bool={bool}
                                const onj={obj}
                                const arr={arr}
                                const emp={emp}
                                </>
                             )
}
export default Parent1;