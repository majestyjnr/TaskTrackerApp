import './components/Header'
import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import {useState} from 'react';
function App() {

  const [tasks, setTasks] = useState([
    {
        id : 1,
        text : 'Go to Wesley Grammar School',
        day: "1st February at 7:00 am",
        reminder: true
    },
    {
        id : 2,
        text : 'Start learning ReactJs',
        day: "1st February at 8:00 am",
        reminder: true
    },
    {
        id : 3,
        text : 'Go to youth fellowship meeting',
        day: "1st February at 7:30 pm",
        reminder: true
    },
    {
        id : 4,
        text : 'Go to Early Foundation Publications',
        day: "6th February at 7:00 am",
        reminder: true
    },
    {
        id : 5,
        text : 'Celebrate birthday',
        day: "22nd February at 7:00 am",
        reminder: true
    },
])

// Delete Task Function
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) =>{
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1

  const newTask = { id, ...task }

  console.table(newTask)
  setTasks([...tasks, newTask])
}

  return (
    
    <div className='container'>
      <Header/>
      <hr/>
      <AddTask onAdd={addTask}/>
      <br/>

    {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Task Added'}
    </div>
  );
}

export default App;