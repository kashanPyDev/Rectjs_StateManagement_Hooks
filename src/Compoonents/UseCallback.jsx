import React from 'react'

const UseCallback = () => {
    console.log('Compoonent Rendered!')
  return (
    <div>UseCallback</div>
  )
}

export default React.memo(UseCallback)