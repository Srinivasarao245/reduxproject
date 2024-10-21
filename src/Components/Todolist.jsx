import React from "react";
import Todo from "./Todo";
import { useCallback } from "react";

function Todolist(){
    var tRef = React.useRef()
    var [todos,serTOdos] =React.useState([
                {
                    title:'Get BMW Car',
                    status:false
                },
                {
                    title:'Buy a new bike',
                    status:true
                },
                {
                    title:'Get a good Job',
                    status:false
                },
                
            ])

            var obj = React.useMemo(()=>{
                return {
                    a:100,
                    b:'rakhi'
                }
            },[])

            function Add(){
                var y = tRef.current.value
                serTOdos([...todos,{title:y,status:false}])
            }

            var del = useCallback(function(b){
                  serTOdos((prevgermi)=>{
                    prevgermi.splice(b,1)
                    return[...prevgermi]
                  })
            },[])

            var done = useCallback(function(b){
                 serTOdos((prevgermi)=>{
                    prevgermi[b].status=!prevgermi[b].status
                    return[...prevgermi]
                 },[])
            })
            return(
                <div className='border border-5 border-primary m-2 p-2'>
                    <input type='text' ref={tRef} className="m-5"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-success' onClick={Add}>Add</button>
                    <ul>
                        {
                            todos.map((a,b)=>{
                                return <Todo obj={obj} {...a} b={b} del={del} done={done}></Todo>
                            })
                        }
                    </ul>
                </div>
            )}
            export default Todolist;

            

        