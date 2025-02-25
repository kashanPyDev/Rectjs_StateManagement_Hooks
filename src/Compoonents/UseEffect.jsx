import React , {useEffect, useState} from 'react'


const UseEffect = () => {
    const [count , setcount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            setcount (count => count + 1)
        },1000)
    })
 
    
  return (
    <div>
      <h1>i have rendered {count}  time .</h1>
    </div>
  )
}

export default UseEffect
