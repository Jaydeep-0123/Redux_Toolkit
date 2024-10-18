import { useSelector,useDispatch } from "react-redux";
import {removeTodo} from '../features/todoSlice'
function Todos()
{
   const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch();
    return(
        <div style={{border:"1px  solid black",padding:"20px",width:"35%",marginLeft:"34%",backgroundColor:"lightgrey"}}>

           <h5>Todo List</h5><hr/>
           {
            todos.map((val)=>{
              return  <div   key={val.id}>
              <div>{val.text}  
                <button  className="btn btn-primary m-2" onClick={()=>dispatch(removeTodo(val.id))}>Remove</button>
                </div>
                </div>
            })
           }
        </div>
    )
}
export default  Todos;
