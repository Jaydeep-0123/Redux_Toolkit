import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todoSlice';
import Todos from './Todos';
function AddTodo() {
    const [input,setInput]=useState("");
    const  dispatch=useDispatch();

    function addTodoHandler()
    {
    
       dispatch(addTodo(input));
       setInput(" ");
    }

  return (
    <div className='container'>
        <input className='form-control mt-5' value={input} style={{width:"28%",marginLeft:"36%"}} type='text' placeholder='Enter the Todo' onChange={(e)=>setInput(e.target.value)}/>
        <button className='btn btn-primary m-4' type='button' onClick={()=>{addTodoHandler()}}>Add Todo</button>
        <Todos/>
    </div>
  )
}

export default AddTodo
