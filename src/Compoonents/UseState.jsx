import { useState } from 'react'
import React from 'react'


const UseState = () => {
    // let color = 'Brown'
    const [color, changeColor] = useState('Brown')

    const [data, Setdata] = useState({
        model: '2023',
        color: 'green',
        range: '2500'

    })
    const makeChanges = () => {
        Setdata((prev) => {
            return { ...prev, color: 'Blue' }
        })
    }


    return (
        <>
            <div className=' bg-blue-200 flex justify-center   ' >
                <div className=''>
                    <h1 className='text-2xl'>My fav color is {color} </h1>
                    <button className='bg-blue-600 px-1 py-2 rounded-lg' onClick={() => changeColor('pink')}>Change Color</button>
                </div>
            </div> <br />

            <div className=' bg-blue-200 flex justify-center   ' >

                <div className=''>
                    <h1 className='text-2xl'>My Cat is  { } </h1>
                    <h2>The range of {data.color} car is {data.range} & model is {data.model} </h2>
                    <button className='bg-blue-600 px-1 py-2 rounded-lg' onClick={makeChanges}>Change Color</button>
                </div>

            </div>

        </>
    )
}

export default UseState
