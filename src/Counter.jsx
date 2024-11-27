import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);

  return (
    <>
      <div>Counter</div>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(count-count)}>reset</button>
      <div>count:{count}</div>
    </>
   

  )
}

export default Counter