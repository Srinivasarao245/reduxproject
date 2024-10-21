import { products } from "./products"; 

var initialState = {
    allproducts:products,
    cartitems:[],
}
function productReducer(state = initialState,action){
    return state
}
export default productReducer;