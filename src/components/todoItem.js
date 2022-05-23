import React from 'react';



function TodoItem(props){

  const delItem=()=>{
    let arr = props.todos.filter((ele)=>{
      return ele.id !== props.todo.id;
    })
    props.changeTodos(arr);
   }
    
    return(    
            <li>
                <div className='tcon'>
                   <div className='todo-txt'>{props.todotxt}</div>
                   <div className='fonts'>
                   <i className="fa-solid fa-circle-check"></i>
                   <i className="fa-solid fa-trash-can" onClick={delItem}></i>
                   </div>
                </div>
            </li>
    
    )
}

export default TodoItem;