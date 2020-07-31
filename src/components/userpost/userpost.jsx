import React from "react";
const Userpost =({post})=>{
    return(
        <div className="container">
            <div className="row">0
                {
                 post.map(item=>(
                     <div className="col-md-12">
                         <div class="card text-left">
                             <div className="card-body">
                                 <h4 className="card-title">{item.title}</h4>
                                 <p className="card-text">{item.completed}</p>
                             </div>
                         </div>
                     </div>
                 ))
                }
            </div>
        </div>
    )
};
export default Userpost