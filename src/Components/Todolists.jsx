import React from "react";
import { connect } from "react-redux";

function Todolists( { todoReducer:{todos},dispatch}){
    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" id="a1"/> &nbsp;
            <button onClick = {()=>{dispatch({type:'ADD_TODO',payload:document.getElementById("a1").value})}}>Add Todo</button>
            { todos.map((todo)=>{return <li>{todo} <button onClick={()=>{}}>Delete</button>  </li> }) }
        </div>        
    ) } 
    export default connect((store)=>{return store}) (Todolists)