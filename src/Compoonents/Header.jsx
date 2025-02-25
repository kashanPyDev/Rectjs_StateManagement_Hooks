import React, { useContext } from 'react'
import { AppContext } from './UseContext'

const Header = () => {
    const {phone} = useContext(AppContext)
  return (
    <>
    <h1>Header</h1>
    <h2>Phone: {phone}</h2>
    </>
  )
}

export default Header