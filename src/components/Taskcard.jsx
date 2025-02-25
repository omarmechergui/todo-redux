import React from 'react'
import { useDispatch } from 'react-redux';
import { deletetask, edittask } from '../redux/action';

function Taskcard({task}) {
  const dispatch = useDispatch();

  return (
    <div style={{width:"20rem",borderRadius:'8px',border:'1px solid #000',padding:'1rem',margin:'1rem',height:'18rem',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:task.iscomplete==true ? 'green' : 'red'}}>
        
        <h1>{task.task}</h1>
        <p>
            time : {task.time}
        </p>
        <button onClick={()=> dispatch(deletetask(task.id))}>delete</button>
        <button onClick={()=> dispatch(edittask(task.id))}>complete</button>

    </div>
  )
}

export default Taskcard