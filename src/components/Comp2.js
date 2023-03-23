import Comp1 from "./Comp1";
import React from "react";
const Comp2=()=>
{
    return(
        <React.Fragment>
            <div>
                <Comp1></Comp1>
                <hr></hr>

                <h1>hello1 from componet 2</h1>
                <p>hello 2 from component 2</p>
            </div>
        </React.Fragment>
    )
}
export default Comp2;