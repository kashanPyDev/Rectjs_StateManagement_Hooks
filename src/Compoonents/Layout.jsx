import React, { useLayoutEffect, useEffect } from 'react'

const Layout = () => {
    useEffect(() => {
        console.log('UseEffect has rendered');

    }, [])

    useLayoutEffect(() => {
        console.log('UselayoutEffect has rendered');

    }, [])
    return (
        <div>
            <h1>Random numbers</h1>
            {Array(99).fill('').map((e,index)=>( <li key={index}>{Math.pow(Math.random(),10)}</li> ))}
        </div>
    )
}

export default Layout