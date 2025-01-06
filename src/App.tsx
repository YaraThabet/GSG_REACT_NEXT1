import { useState, useSyncExternalStore } from 'react'
import './App.css'
import FormComponent from './component/Form component/Form.component'
import TodoDataComponent from './component/TodoData/TodoData.component'
import AllTodosComponent from './component/AllTodocomponent/AllTodo.component';
import {ITodoItem} from './component/type'

interface Itask {
  title: string;
  urgent: boolean;
}

function App() {

const[todos , setTodos] = useState<ITodoItem[]>([]);


  const handleNewItem = (item : ITodoItem) => {
    setTodos([...todos , item] );

  }

  const handleTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
   const itemId = e.target.dataset["itemId"];
   setTodos(todos.map(item =>(item.id === Number(itemId)) ? {...item, isDone : !item.isDone} :item));

  }

  const handleDelete = (index : number) =>{
    setTodos([...todos.slice(0,index), ...todos.slice(index +1 ,todos.length)])

  }

  
  return (
    <>
    <div  className='all'>
      <FormComponent onSubmit={handleNewItem } />
      <TodoDataComponent items={todos} /> 
      <AllTodosComponent items={todos} onToggle={handleTaskToggle} onDelete={handleDelete} />
 

    </div>
  

    </>
  )
}

export default App;
