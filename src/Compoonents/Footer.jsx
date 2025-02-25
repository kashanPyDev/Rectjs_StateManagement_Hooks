import React, { useContext } from 'react'
import { AppContext } from './UseContext'

const Footer = () => {
    const {phone , email} = useContext(AppContext)
  return (
    <>
    <h1>Footer</h1>
    <h4>Phone: {phone} </h4>
    <h4>Email: {email} </h4>
    </>
  )
}

export default Footer