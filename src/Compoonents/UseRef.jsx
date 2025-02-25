import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    // const [value , Setvalue] =useState(0)
    // const count = useRef(0)  

    const value = useRef(0)


    // useEffect(()=>{
    //     count.current = count.current + 1;

    // });
    const clicked = () => {
        console.log(value.current)
        value.current.style.background = "blue"
    }

  return (
    <div>
        <input className='bg-blue-300' type="text" ref={value} />
        <button onClick={clicked}>Click Me</button>



      {/* <button className='bg-blue-600 px-3 py-1 rounded-lg' onClick={()=>Setvalue(prev => prev + 1)}>+</button>
      <h1>The value is: {value} </h1>
      <button className='bg-blue-600 px-3 py-1 rounded-lg' onClick={()=>Setvalue(prev => prev - 1)}>-</button>
      <h2>Count is: {count.current}</h2> */}
    </div>
  )
}

export default UseRef
