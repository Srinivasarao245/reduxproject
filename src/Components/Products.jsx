import React from "react";
import { connect } from "react-redux";

function products({productReducer:{allproducts},dispach}){
    return ( 
        <div>
            <h1>Products</h1>
            <div className="">
                { allproducts.map(()=>{return  }) }
            </div>
        </div>
     ) }
     export default connect(store=>store) (products)