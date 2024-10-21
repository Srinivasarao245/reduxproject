import React from "react";
import { connect } from "react-redux";

function Counts(props){
    console.log(props)
    return ( 
        <div className="container">
            <h1>Counter:{props.CounterReducer.coun}</h1>
            <button onClick={()=>props.dispatch({type:'INC'})}>Increment</button>  &nbsp; &nbsp;
            <button onClick={()=>props.dispatch({type:'DEC'})}>Decrement</button>  &nbsp; &nbsp;
            <button onClick={()=>props.dispatch({type:'RESET'})}>Reset</button>  
        </div>
     ) }
     export default connect((store)=>{return store})(Counts);