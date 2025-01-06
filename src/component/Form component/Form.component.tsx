import { useState } from 'react'
import './Form.css'
import { ITodoItem } from '../type';
import React from 'react'

interface Iprops {
  onSubmit:(item:ITodoItem)=>void//لمن اضغط onSubmit  (ITodoItem)يجب ان يستقبل عنصر من نوع  
}


const FormComponent = React.memo((props:Iprops)=>{

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) =>{
    e.preventDefault();//عشان ما يعمل  اعادة تحميل  للصفحة
    const title:string = e.currentTarget["task"].value;//لحصول على قيمة العنوان من حقل الإدخال الذي يحمل الاسم "task
    const isUrgent:boolean =e.currentTarget["urgent"].checked;
    if(title.length>3){
      const newTask:ITodoItem = {// بدي امررها للاب عبر الprops 
        id:Date.now() ,
        title,
        isUrgent,
        isDone:false,
      }
      props.onSubmit(newTask);//  للapp newTaskعشان انمرر 
    }

  }


    return (
      <div>
        <h2>Day : {new Date().toDateString()}</h2>
        <form className='form-FormComponent' onSubmit={handleSubmit}>
              
              <input  type='text'name="task" placeholder='input'  />
            <div>
              <label htmlFor='urgent'>Urgent</label>
              <input  type='checkbox' id='urgent' name="urgent"/>
            </div>
            <input type="submit" value=" App Todo"   />
          </form>
      </div>
      
     

    )
});
export default FormComponent;
