import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

function MainContainer() {
  return (
    <div className='col-span-12 bg-slate-100'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
