

export interface Task {
    task: Task;
    completed: boolean;
    id: number;
  }
interface TodoItemComponentProps{
    task: Task;
    toggleCompletion: (id: number) => void; 
    deleteTask: (id: number) => void; 
  }

const TodoItemComponent: React.FC<TodoItemComponentProps> = ({ task, toggleCompletion, deleteTask }) => (
  <div>
    <div >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
      />

    </div>
    <button onClick={() => deleteTask(task.id)}>
      X
    </button>
  </div>
);

export default TodoItemComponent;