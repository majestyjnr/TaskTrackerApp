import './components/Header'
import Header from './components/Header';
import Tasks from "./components/Tasks";
import {useState} from 'react';
function App() {

  const [tasks, setstate] = useState([
    {
        id : 1,
        theTask : 'Go to Wesley Grammar School',
        day: "1st February at 7:00 am",
        reminder: true
    },
    {
        id : 2,
        theTask : 'Start learning ReactJs',
        day: "1st February at 8:00 am",
        reminder: true
    },
    {
        id : 3,
        theTask : 'Go to youth fellowship meeting',
        day: "1st February at 7:30 pm",
        reminder: true
    },
    {
        id : 4,
        theTask : 'Go to Early Foundation Publications',
        day: "6th February at 7:00 am",
        reminder: true
    },
    {
        id : 5,
        theTask : 'Celebrate birthday',
        day: "22nd February at 7:00 am",
        reminder: true
    },
])

// Delete Task Function
const deleteTask = () =>{

}
  return (
    
    <div className='container'>
      <Header/>
      <hr/>
      <br/>
    <Tasks tasks = {tasks}/> 
    </div>
  );
}

export default App;