
import './App.css';
import { ToDoList } from './ToDo';
import Photo from './sandclock.jpeg'

function App() {
  return (
    

     <div className='position-container'>
     <div className="container">
      <h1 className='header'>BE THE BOSS <br></br>of your day!!!</h1>
      <h1></h1>
     </div>
     <div className="container">
      <img className='image' src={Photo} width="400px" alt="mainPhoto"/>
     </div>
     <div className="container">
      <h2 className='to-do-list'>TO DO LIST</h2>
     </div>
     <ToDoList/>
     </div>
    
  
  );
}

export default App;
