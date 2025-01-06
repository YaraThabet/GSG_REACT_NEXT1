

import { useMemo } from 'react';
import { ITodoItem } from '../type';
import './TodoData.css'

  interface Iprops {
    items:ITodoItem[];


  }

const TodoDataComponent= (props:Iprops) => {

  const urgentCount = useMemo(()=>{
    return props.items.filter(item =>(item.isUrgent)).length;
  },[props.items]);//بتستخدم اذا اتغيرت الITEM في البرنامج
  
  const completedCount =props.items.filter(item =>(item.isDone)).length;

  return(
    <div className='TodoData'>
     <div>
       <b>{props.items.length}</b>
       <span>Created Tasks</span>
    </div>


    <div>
       <b>{completedCount}</b>
       <span>copleted Tasks</span>
     </div>

     <div>
       <b>{urgentCount}</b>
       <span>Urgent Tasks</span>
     </div>
  </div>

  )

}




export default TodoDataComponent;