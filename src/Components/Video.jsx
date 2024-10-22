import React,{ useState } from "react";
import Like from "./Like";

// import Counter from "./Counter";

function Video(){
    // var [a,setA] =  useState(0)   
    // var [b,setB] =  useState(0)   
    // function add(){
    //   setA(a++)
    // }
    // function dec(){
    //     setB(b++)
    // }
    return(  
        <div className="container">
            <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"  width="60%" height="300px" title="YouTube video Player" className="rounded mx-auto d-block" allowFullScreen > </iframe> <br /> <br />
             <Like></Like>
            <iframe  src=" https://www.youtube.com/embed/NHsafS0iTk0?si=EisBC5Ye85pxN3WD "  width="50%" height="400px" title="YouTube video Player" allow="accelerometer; autoplay; encrypt-media; gyroscope" className="rounded mx-auto d-block" allowFullScreen></iframe>  <br />  <br />              
             <Like></Like>
            <iframe  src=" https://www.youtube.com/embed/oCrqiFaWEik?si=SwHaYflgqm8WWA8l "  width="100%" height="500px" title="YouTube video Player" allow="accelerometer; autoplay; encrypt-media; gyroscope" className="rounded mx-auto d-block" allowFullScreen></iframe>  <br />  <br />              
             <Like></Like>
            <iframe  src=" https://www.youtube.com/embed/2dFeczHMf58 "  width="60%" height="300px" title="YouTube video Player" allow="accelerometer; autoplay; encrypt-media; gyroscope" className="rounded mx-auto d-block" allowFullScreen></iframe>  <br />  <br />              
             <Like></Like>
            <img  src=" https://live.staticflickr.com/4724/25039883267_5b3eaede33.jpg" /> <br /> <br />
              <Like></Like> 
            <iframe width="560" height="325" src="https://www.youtube.com/embed/uT0Z2kOctb8?si=IGMSrp7RK4Ehc_BU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
              <Like></Like> 
        </div>
    ) }
    export default Video