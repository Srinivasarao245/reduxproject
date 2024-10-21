var initialState = {
    todos:['Get good job','get a bike','get a flat','pay bills']
}
function todoReducer(state=initialState,action){
    if(action.type==='ADD_TODO'){
        return{ ...state,todos:[...state.todos,action.payload] }
    } return state
}
    // if(action.type==='DEL_TODO'){
    //     return{ ...state,todos:[...state.todos,action.payload] }
    // } return state,
export default todoReducer;