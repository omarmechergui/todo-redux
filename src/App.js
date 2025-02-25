import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Taskcard from './components/Taskcard';
import { useState } from 'react';
import { addtask } from './redux/action';
import Header from './components/Header';

function App() {
  const tasks = useSelector(state => state.tasks);
  console.log(tasks);
  const [name, setname] = useState('');
  const [time, settime] = useState('');
  const dispatch = useDispatch();
  const dark = useSelector(state => state.dark);
  const handlesubmit = () => {
    if (name !== '' && time !==''){
      const newtask = {id: tasks.length + 1, iscomplete: false, task: name , time:time}
    dispatch(addtask(newtask))
    setname('');
    settime('');
    }
    else{
      alert('please fill all fields')
    }
    
  };
  return (
    <div style={{ background: dark == true ? 'black' : ''}}>
      <Header/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '2rem', gap: '1rem', border: '1px solid #000', padding: '1rem', width: '20rem', borderRadius: '8px' }}>
        <input onChange={(e) => setname(e.target.value)} type="text" placeholder="add task" />
        <input onChange={(e) => settime(e.target.value)} type="time" />
        <button onClick={handlesubmit} >add</button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '1rem' }}>
        {tasks.map(el => (
          <Taskcard key={el.id} task={el} />

        ))
        }
      </div>
    </div>
  );
}

export default App;
