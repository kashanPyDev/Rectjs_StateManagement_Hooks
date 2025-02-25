import React, { useReducer } from 'react'


const UseReduce = () => {

    const initialState = { count: 0 }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increase': {
                return { count: state.count + 1 }
            }
            case 'decrease': {
                return { count: state.count - 1 }
            }
            case 'input': {
                return { count: action.payload}
            }
            default: {
                return state
            }
        }
    }
    // console.log(state.count);


    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.count}</h1> <br />
            <button className='border border-black rounded-lg px-3 py-1' onClick={() => dispatch({ type: 'increase' })}>+1</button> <br /> <br />
            <button className='border border-black rounded-lg px-3 py-1' onClick={() => dispatch({ type: 'decrease' })}>-1</button>
            <input value={state.count} className='outline outline-black'
             type="number" onChange={(e)=>dispatch({type : 'input' , payload:Number(e.target.value)})} />
        </div>
    )
}

export default UseReduce