
import { useState } from "react"
import data from "../data/data.js"
import Card from "../Card/card.jsx";
function Movie(){
    const[search,setSearch]=useState("");
    
    
    return(
        <div>
    <input type="text" placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)} style={{padding:"20px",marginLeft:"600px",marginTop:"20px"}}/>
        

        <section style={{border:"2px solid ",display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"20px",boxShadow:"10px 5px 5px 4px"}}>
            {
              data.filter((iteam)=>(
                iteam.Name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
              ))
              
              .map((iteam,index)=>(
           
                 <Card  key={index} iteam={iteam} />
            
              
              ))
            }
        </section>
        </div>
    )
}
export default Movie;