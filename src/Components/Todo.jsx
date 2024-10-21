import React from "react";
var Todo = React.memo(function(props){
    console.log(props.title+"Todo rendered")
    return <li className='border border-2 m-2 p-2 list-unstyled'>
            <span className={props.status?'text-decoration-line-through':''}>{props.title}</span>
            <button className='btn btn-danger m-3 ' onClick={()=>{props.del(props.b)}}>Delete</button>
            <button className='btn btn-warning m-2' onClick={()=>{props.done(props.b)}} >{props.status?'Undo':'Done'}</button>
           </li>
})
export default Todo