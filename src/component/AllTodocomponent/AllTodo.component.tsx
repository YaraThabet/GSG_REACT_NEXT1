import TodoItemComponent from "./TodoItemcomponet/TodoItem.componet";
import './AllTodo.component.css'
import { ITodoItem } from "../type";
 

  interface Iprops {
    items:ITodoItem[];
    onToggle:(e: React.ChangeEvent<HTMLInputElement>) =>void;
    onDelete:(index:number)=> void;


  }


const AllTodosComponent= (props:Iprops) => (

  <div className="AllTodosComponent">
    {
    props.items.map((item ,index) =>(
       <TodoItemComponent 
         key={item.id}
         data={item} 
         onToggle={props.onToggle} 
         onDelete={() =>props.onDelete(index)} 
       /> 
      ))
      
    }


  </div>
);

export default AllTodosComponent;