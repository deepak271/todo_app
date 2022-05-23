import React from 'react';
import TodoItem from './todoItem'

function TodoContainer(props)
{
    return(
    <div  className='todo-con'>
      <ul>
       {
          props.todos.map((todo)=>{
            return <TodoItem key={todo.id} todos={props.todos} todotxt={todo.text} changeTodos={props.changeTodos} todo={todo}/>
          })
       }
      </ul>
    </div>
    )
}

export default TodoContainer