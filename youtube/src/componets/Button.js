import React from 'react'

function Button( {name} ) {
  return (
    <div className=' p-2 m-2 '>
      <button className=' p-2 m-2 rounded-lg bg-gray-200 '>{name}</button>
      
    </div>
  )
}

export default Button
