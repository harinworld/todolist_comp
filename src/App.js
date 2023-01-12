import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Insert from './component/Insert';
import List from './component/List';

function App() {

  const [data,setData] = useState([]),
        elItems = useRef([]),
        count = useRef(0),
        [todoNum, setTodoNum] = useState(0);

        
  const add = (value)=>{
    setData([...data,value]);
  };
  
  const remove = (n)=>{
    let removeData = data.filter((obj)=>obj.num !== n)
    setData(removeData);
  };

  const update = (ee)=>{
    console.log(ee)
    if(window.event.target.tagName != 'BUTTON'){
    let check = data.map((obj)=>{
      if(obj.num == ee){
        obj.checked = !obj.checked;
      }
      return obj;
    })
    setData(check);
  }
  }

  useEffect(()=>{
    let count = data.filter((obj)=>obj.checked == false).length;
    console.log(count)
    setTodoNum(count);
  })

  return (
    <div className="App">
      <article>
        <List data={data} todoNum={todoNum} remove={remove} update={update} add={add}/>
          <Insert add={add}/>
      </article>
    </div>
  );
}

export default App;
