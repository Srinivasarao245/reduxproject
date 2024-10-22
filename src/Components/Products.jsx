import React from "react";
import { connect } from "react-redux";

function products({productReducer:{allproducts,cartitems},dispatch}){
    return ( 
        <div className="container">
            <h1>Products</h1>
            <div className="d-flex flex-wrap">
                { allproducts.map((p)=>{
                    return <div className='card m-2' style={{width:"10rem"}}>
                    <img src={p.image} className="card-img-top"  style={{height:"100px"}} alt="" />
                    <div className="card-body"  >
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.description}</p>
                            { 
                            cartitems.some((citem)=>{ 
                                if(citem.id===p.id){return true }
                                else{ return false}
                            })? <button className="btn btn-warning">Go To Cart</button>:<button className="btn btn-primary" onClick={()=>{dispatch({type:'ADD_TO_CART',payload:p})}}>Add To Cart</button>
                        }
                    </div>
                    </div> 
                }) 
            }
            </div>
        </div>
     ) }
     export default connect(store=>store) (products)