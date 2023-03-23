const Child=(props)=>
{
    return(
        <>
        
        <h1 className="my_class">{props.key1}</h1>
        <h1 className="my_class">{props.key2}</h1>
        <h1 className="my_class">{JSON.stringify(props.key3)}</h1>
        {
            props.key4.map((Element,index)=>{
                return(
                    <h1 key={Element} className="my_class">{Element}...{index}</h1>
                )
            }
            )
        }
        <p className="my_class">{props.key5.key1}....{props.key5.key2}....{props.key5.key3}</p>


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
                    props.key6.map((element,index)=>{
                        return(
                            <>
                            <tr key={element.id}>
                                <th className="my_class">{element.id}</th>
                                <th className="my_class">{element.name}</th>
                                <th className="my_class">{element.salary}</th>

                                

                            </tr>
                            </>
                        )

                    })
            
                }     
                </tbody>
              </table>
              
                
        </>
    )
}
export default Child;