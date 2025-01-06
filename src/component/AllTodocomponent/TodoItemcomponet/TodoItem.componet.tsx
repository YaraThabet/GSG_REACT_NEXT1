
import { ITodoItem } from '../../type';
import './TodoItemcomponet.css'
import { X } from '@phosphor-icons/react/dist/ssr';
 
interface Iprops{ 
  data : ITodoItem;
  onToggle:(e: React.ChangeEvent<HTMLInputElement>) =>void;
  onDelete: () => void

};


const TodoItemComponent = ({data,onToggle,onDelete}:Iprops) => {
  return (
    <div >
      <div className='checkbox' >
         <input type="checkbox" checked={data.isDone} onChange={onToggle} data-item={data.id} />
         <span>{data.title}</span>
         <span><X size={20} color="#a30000" weight="fill" onClick={onDelete} /></span>
         <span>isUrgent:{data.isUrgent.toString()}</span>
      </div>



     
    </div>
  );  
};

export default TodoItemComponent;