import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'

function Body() {
  return (
    <div className='grid grid-flow-col col-span-10'>
      <Sidebar/>
      <MainContainer/>
    </div>
  )
}

export default Body
