import React from 'react'
import Item from './Item'



const List = ({data, todoNum, remove, update}) => {
    
  return (
    <>
        <h1>Todolist</h1>
        <p>할일 {todoNum}개 남음</p>
        <ul className='list'>
          {
            data && data.map((obj,key)=>{
              return <Item obj={obj} key={key} remove={remove} update={update}/>
            })
          }
        </ul>

    </>
  )
}

export default List