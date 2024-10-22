import { products } from "./products"; 

var initialState = {
    allproducts:products,
    cartitems:[]
}
function productReducer(state = initialState,action){
    if(action.type==='ADD_TO_CART'){
        return {...state,cartitems:[...state.cartitems,{...action.payload,count:1}]}
    }
    if(action.type==='INC_CART_ITEM_COUNT'){
        var cartitems = state.cartitems.map((ci)=>{
            if(action.payload===ci.id){
                ci.count++
            }
            return ci;
        })
        return {...state,cartitems:[...cartitems]}
    }
    if(action.type==='DEC_CART_ITEM_COUNT'){
        var cartitems = state.cartitems.map((ci)=>{
            if(action.payload===ci.id){
                ci.count--
            }
            return ci;
        })
        return {...state,cartitems:[...cartitems]}
    }
    if(action.type==='DELETE_CART_ITEM'){
        var cartitems = state.cartitems.map((ci)=>{
            if(action.payload===ci.id){
                ci.count=0
            }
            return ci;
        })
        return {...state,cartitems:[...cartitems]}
    }
    if(action.type==='DELETE_ITEM'){
        var x=[...state.cartitems]
        var d = x.filter((a)=>{return a.id!==action.payload})
        return {...state,cartitems:[...d]}
        }
    return state
}
export default productReducer;