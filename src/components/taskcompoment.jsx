import React from "react";
const Search=(props)=>{
    //console.log(props)
    return(
        <div className="container">
            <div className="col-md-12">
                <input type="text" className="form-control" placeholder={props.placeholder}
            onChange={props.Search}
            /> 
            </div> 
        </div>
    )
}
export default Search;