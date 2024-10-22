import React from "react";
import { connect } from "react-redux";

function Cart({productReducer:{cartitems},dispatch}){
    return( <div className="container">
        Cart
        <table className="table table-striped">
            <thead>
                <tr><th>image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Volume</th>
                    <th>Item Price Total</th>
                    <th>Delete  Item</th></tr>
            </thead>
            <tbody>
                {cartitems.map((ci)=>{
                    return <tr>
                        <td><img src={ci.image} alt="" width="80px" /></td>
                        <td>{ci.title}</td>
                        <td>{ci.price}</td>
                        <td> <button className="btn btn-secondary" onClick={()=>{dispatch({type:'DEC_CART_ITEM_COUNT',payload:ci.id})}}>-</button>
                            <b className="p-2">{ci.count}</b> 
                            <button className="btn btn-success" onClick={()=>{dispatch({type:'INC_CART_ITEM_COUNT',payload:ci.id})}}>+</button> &nbsp;
                            <i className="bi bi-arrow-repeat btn btn-warning" onClick={()=>{dispatch({type:'DELETE_CART_ITEM',payload:ci.id})}}></i> </td>
                        <td>{ci.price*ci.count}</td>
                        <td> <button onClick={()=>{dispatch({type:'DELETE_ITEM',payload:ci.id})}}>Delete</button> </td>    
                    </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={6} className="bg-success text-end">Total:{cartitems.reduce((a,b)=>{return a+(b.price*b.count)},0)}</th>
                </tr>
            </tfoot>
        </table>
    </div> 
    ) }
    export default connect(store=>store)(Cart);