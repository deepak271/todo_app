import React,{useState} from 'react';
import './App.css';
import TodoContainer from './components/todoContainer'



function App() {

let [txt,changetxt]=useState('');
let [todos,changeTodos]=useState([]);

function addItem(){
    changeTodos((prev)=>{

        return [...prev,{
          id:new Date().getTime().toString(),
          text:txt,
          iscomplete:false
        }];
    })
    changetxt('')
}

const getText = (e)=>{
 txt=e.target.value;
changetxt(txt)
}

return(
  <div className="container">
  <div className="head">
  <h1>Todo App </h1>
  <div className="inp">
      <form >
      <input type="text" placeholder='Enter Items..' onChange={getText} value={txt}/>
      </form>
      <button type='submit' className='btn' onClick={addItem}>Add</button>
  </div>
</div>
<TodoContainer todos={todos} changeTodos={changeTodos} />
</div>
)      

}

export default App;
