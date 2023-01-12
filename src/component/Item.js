import React, { useRef, useState } from 'react'

const Item = ({obj,remove,update}) => {

    const elItems = useRef();
    // const [checked, setChecked] = useState(false);
    
    const state = (e)=>{
      //  e.target.classList.toggle('active');
        update();
    };

    // const c = ()=>{
    //     setChecked(!checked)
    //     console.log(checked)
    // }

  return (
    <li ref={elItems} onClick={()=>{update(obj.num);}} className={obj.checked ? 'active':''}>
        {obj.todo}
        <button onClick={()=>remove(obj.num)}>수정</button>
        <button onClick={()=>remove(obj.num)}>삭제</button>
    </li>
  )
}

export default Item