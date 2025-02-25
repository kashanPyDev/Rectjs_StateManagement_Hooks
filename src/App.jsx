import React , {useState,useCallback} from 'react'
import UseState from './Compoonents/UseState'
import UseEffect from './Compoonents/UseEffect'
import UseRef from './Compoonents/UseRef'
import UseMemo from './Compoonents/UseMemo'
import UseCallback from './Compoonents/UseCallback'
import Header from './Compoonents/Header'
import Footer from './Compoonents/Footer'
import UseReduce from './Compoonents/UseReduce'
import Layout from './Compoonents/Layout'
import CustomHook from './Compoonents/CustomHook'

function App() {
  const [count, setcount] = useState(0)
  const newfunc = useCallback(() => {},[],)
  

  
  return (
    <>
     {/* <UseState/> */}
     {/* <UseEffect/> */}
     {/* <UseRef /> */}
     {/* <UseMemo/> */}
     {/* <Header/>
     <UseCallback newfunc={newfunc}/>
     <h1>{count}</h1>
     <button onClick={()=>setcount(prev=>prev+1)}>click</button>
     <Footer/> */}
     {/* <UseReduce/> */}
     {/* <Layout/> */}
     <CustomHook/>
    </>
  )
}

export default App
