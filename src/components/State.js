
import React,{useState} from "react";
import  "./State1.css";
const State=()=>{
const [str,setStr]=useState("react");
const [num,setNum]=useState("100");
const [bool,setBool]=useState(true);
const [obj,setObj]=useState({key1:"hello1",key2:"hello2",key3:"Hello3"});
const [arr,setArr]=useState([100,200,300,400]);
const [emp,setEmp]=useState([{id:1,name:"person1",salary:10000},
                             {id:2,name:"person2",salary:20000},
                             {id:3,name:"person3",salary:30000}  ]);

return(
<React.Fragment>
    <div>
        <h1 className="my_class">{str}</h1>
        <h1>{num}</h1>
        <p>{JSON.stringify(bool)}</p>
        <p>{obj.key1}...{obj.key2}...{obj.key3}</p>
        {
        arr.map((element,index)=>{
            return(
            <h1 key={element}>{element}...{index}</h1>)
        })
        }

        <table border={1}
              align={"center"}
              
              cellpadding={20}
              cellspcing={20}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    emp.map((element,index)=>{
                        return(
                            <>
                            <tr key={element.id}>
                                <th>{element.id}</th>
                                <th>{element.name}</th>

                                <th></th>

                            </tr>
                            </>
                        )

                    })
            
                }     
                </tbody>
              </table>
                
    
    
    </div>  
</React.Fragment>
)
}
export default State;

    