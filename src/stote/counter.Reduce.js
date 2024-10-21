var initialState={
    coun:0,
}
function CounterReducer(state=initialState,action){
    if(action.type === 'INC'){
        return {...state,coun:state.coun+1}
    }
    if(action.type === 'DEC'){
        return {...state,coun:state.coun-1}
    }
    if(action.type === 'RESET'){
        return {...state,coun:state.coun=0}
    }
    return state
}
export default CounterReducer