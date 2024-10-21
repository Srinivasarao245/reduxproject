import React,{ useState } from "react";
 
function Like(){
    var [a,setA] =  useState(0)   
    var [b,setB] =  useState(0)   
    function add(){
      setA(a++)
    }
    function dec(){
        setB(b++)
    }
    return (
        <div className="container text-start">
            <i className="bi bi-hand-thumbs-up btn btn-success " onClick={()=>add()}>{a}</i> &nbsp; &nbsp;
            <i className="bi bi-hand-thumbs-down btn btn-danger " onClick={()=>dec()}>{b}</i>  <br /> <br />
        </div>
    )  }
    export default Like;