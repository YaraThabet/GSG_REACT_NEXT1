

import './TodoData.css'
interface ItaskCounts {
  total: number;
  completed: number;
  urgent: number;
}


const TodoDataComponent= ({ taskCounts }:{ taskCounts:ItaskCounts}) => ( //يستخدم لعرص المهام في التطبيق 
  <div className='TodoData'>
    <div>
    <div className='Created1'>
      <h3>{taskCounts.total}</h3>
      <p>Created tasks</p>
    </div>
    <div className='Created2'>
      <h3>{taskCounts.completed}</h3>
      <p>Completed tasks</p>
    </div>
    <div className='Created3'>
      <h3>{taskCounts.urgent}</h3>
      <p>Urgent tasks</p>
    </div>

    </div>
    
  </div>
);

export default TodoDataComponent;