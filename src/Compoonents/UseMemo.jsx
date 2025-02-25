import React,{useState,useMemo} from 'react'


const UseMemo = () => {
    const [number, setNumber] = useState(0)
    const [count, setcount] = useState(0)

    function cubenum(num){
        console.log("Calculation Done");
        return Math.pow(num , 3)
    }
    // let result = cubenum(number)
    const result = useMemo(() => cubenum(number), [number])
    

  return (
    <div>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
      <h1>Cube of the number: {result}</h1>
      <button onClick={()=>{setcount(count+1)}}>+</button>
       <h1>Counter: {count}</h1>
    </div>
  )
}

export default UseMemo
