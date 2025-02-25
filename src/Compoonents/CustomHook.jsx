import React, { useState, useEffect, } from 'react'
import Uselocalstor from '../Hooks/Uselocalstor'

const CustomHook = () => {
    const [name, setname] = Uselocalstor('username', '')
    const [id, setId] = Uselocalstor('userid', '')

    return (
        <>
            <div>
                <input className=' px-2 py-3 outline outline-amber-400 rounded-lg my-1' type="text" placeholder='Please enter your name' value={name} onChange={(e) => setname(e.target.value)} />
                <h2>Hello, {name}</h2>
            </div>
            <div>
                <input className='px-2 py-3 outline outline-amber-400 rounded-lg my-1' type="text" placeholder='Please enter your Id' value={id} onChange={(e) => setId(e.target.value)} />
                <h2>Your ID: , {id}</h2>
            </div>
        </>
    )
}

export default CustomHook