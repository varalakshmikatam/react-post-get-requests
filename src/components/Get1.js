import { useState,useEffect} from "react";
import axios from "axios";
const Get1=()=>{
    const [arr,setArr]=useState([]);
    useEffect(()=>
    {
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
            const {data}=posRes;
            const {records}=data;
            setArr(records);
        },(errRes)=>{
            console.log(errRes);
        })
    },[]);
    return(
        <>
        {
        arr.length==0?(<div></div>):(
            <table>
                <tr>
                <th> Name</th>
                <th>City</th>
                <th>Country</th>
                </tr>
                {
                    arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.Name}</td>
                                <td>{element.City}</td>
                                <td>{element.Country}</td>

                            </tr>
                            
                        )
                    })
                }
            </table>
        )
            }
        </>
    )

}
export default Get1;


