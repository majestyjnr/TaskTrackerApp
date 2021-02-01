import './components/Header'
import Header from './components/Header';
import Tasks from "./components/Tasks";
function App() {
  const developerName = "Developer Majesty"
  return (
    
    <div className='container'>
      <Header/>
      <hr/>
      <br/>
    <center><p>Developed By {developerName}</p></center> 
    <Tasks/> 
    </div>
  );
}

export default App;