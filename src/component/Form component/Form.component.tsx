import { useState } from 'react'
import './Form.css'


interface Itask{
  title: string;
  urgent: boolean;
//   completed: boolean;
}

interface IaddTask{
    addTask: (task:Itask) => void;
}

const FormComponent:React.FC<IaddTask> = ({addTask})=>{

     const[title , setTitle]=useState<string>("");
     const [urgent, setUrgent] = useState<boolean>(false);

     const handleSubmit = (e: React.FormEvent) => {
       e.preventDefault();
       if (!title.trim()) return;//trim لازلة الفرغات 
       addTask({ title, urgent });
       setTitle("");
       setUrgent(false);
     };


    return (
        <div >
            <form onSubmit={handleSubmit} className='form-container'>
            <div className='input1'>
            <input id="title" type="text"placeholder="Type Todo here..." onChange={e =>setTitle(e.target.value)}  />
            </div>
            <div>
            <input id="Check" type="checkbox" onChange={e =>setUrgent(e.target.checked)}  />
            </div>
            <button type="submit" >Add Todo</button>  {/* لمن نضغط يتم ارسال البيانات الى الاب عبر الprops */}
            </form>
        </div>
    )
}
export default FormComponent;