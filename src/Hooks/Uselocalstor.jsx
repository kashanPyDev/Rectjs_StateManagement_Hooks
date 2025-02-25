import React,{useState, useEffect} from 'react'

const Uselocalstor = (key,initialVal) => {
    const [name, setname] = useState(
        localStorage.getItem('key')?
        localStorage.getItem('key'):initialVal
    )
    useEffect(() => {
      localStorage.setItem(key ,name)
    }, [name,key])
    
  return [name,setname ]
}

export default Uselocalstor