
const Child1=(props)=>
{
    return(
        <>
<h1 className="my_class">{props.str}</h1>
        <h1>{props.num}</h1>
        <p>{JSON.stringify(props.bool)}</p>
        <p>{props.obj.key1}...{props.obj.key2}...{props.obj.key3}</p>
        {
         props.arr.map((element,index)=>{
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
                    props.emp.map((element,index)=>{
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
                
        </>
    )
}
export default Child1;