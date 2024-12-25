import { useState } from 'react'
import './App.css'
import FormComponent from './component/Form component/Form.component'
import TodoDataComponent from './component/TodoData/TodoData.component'
import AllTodosComponent from './component/AllTodocomponent/AllTodo.component';

interface Itask {
  title: string;
  urgent: boolean;
  // completed: boolean;
}

function App() {
  
  const [tasks, setTasks] = useState<any[]>([]);

  const taskCounts = {
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    urgent: tasks.filter((task) => task.isUrgent).length,
  };

  const addTask = (task: Itask) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  }
  const toggleCompletion = (id:number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id:number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  

  return (
    <>
    <div  className='all'>
      <FormComponent addTask={addTask} />
      <TodoDataComponent taskCounts={taskCounts}/>
      <AllTodosComponent 
      tasks={tasks}
      toggleCompletion={toggleCompletion}
      deleteTask={deleteTask}
      />
 

    </div>
  

    </>
  )
}

export default App;
