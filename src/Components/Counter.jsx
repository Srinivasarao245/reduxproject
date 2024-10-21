import React, { useState } from "react";

function Counter(){
    var [a,setA] =  useState(0)   
    function add(){
      setA(a++)
    }
    function dec(){
        setA(a--)
    }
    function reset(){
        setA(a=0)
    }
    return ( 
        <div className="container">
            <h1>Counter:{a}</h1>  
            <button onClick={()=>add()}>+</button>  &nbsp;    
            <button onClick={()=>reset()}>@</button>  &nbsp;    
            <button onClick={()=>dec()}>-</button> 
        </div>
    ) }
    export default Counter