
export default function Notification(){
const data=[
    {
        id:1,
        type:"Regular",
        price:"N******",
        update:"Coming soon",
        plan:"Add plan"
    },
    {
        id:2,
        type:"Premium",
        price:"N******",
        update:"Coming soon",
        plan:"Add plan"
    },
    {
        id:3,
        type:"Enterprise",
        price:"N******",
        update:"Coming soon",
        plan:"Add plan"
    },
]
    return(
       <div >
        <h2 className="text-2xl font-sans ml-32">Pricing</h2>
        <div>
            {
                data.map((id,type,price,update,plan)=>{
                    return(
                        <div key={id}>
                            <p>{type}</p>
                            <p>{price}</p>
                            <h5>{update}</h5>
                            <button>{plan}</button>
                        </div>
                    )
                })
            }
        </div>
       </div>
    )
}