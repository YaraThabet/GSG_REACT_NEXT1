import TodoItemComponent from "./TodoItemcomponet/TodoItem.componet";


export interface Task {
    task: Task;
    completed: boolean;
    id: number;
  }
interface AllTodosComponentProps {
    tasks: Task[];  
    toggleCompletion: (id: number) => void;
    deleteTask: (id: number) => void;  
  }

const AllTodosComponent: React.FC<AllTodosComponentProps> = ({ tasks, toggleCompletion, deleteTask }) => (
  <div>
    {tasks.map((task) => (
      <TodoItemComponent  
      key={task.id}
      task={task}
      toggleCompletion={toggleCompletion}
      deleteTask={deleteTask}/>
    ))}
  </div>
);

export default AllTodosComponent;