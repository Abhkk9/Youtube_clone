import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom";
function Sidebar() {

  const isMenuOpen = useSelector( store => store.app.isMenuOpen);

  if(!isMenuOpen)
    return null;
  return (
    <div className=' p-5 shadow-lg w-40 '>
    <h1 className='font-bold py-3'> Side_pannel</h1>
      <ul> 
      <li><Link to={"/"}>Home</Link></li>
      <li>Shorts</li>
      <li>Subscriptions</li>
      <li>Youtube Music</li>
      </ul>
    <h1 className='font-bold py-3'> You</h1>
      <ul> 
      <li>History</li>
      <li>Playlists</li>
      <li>Your videos</li>
      <li>Your courses</li>
      <li>Watch later</li>
      <li>Liked videos</li>
      <li>Downloads</li>
      </ul>
      <h1 className='font-bold py-3'> Subscriptions</h1>
      <ul> 
      <li>History</li>
      <li>Playlists</li>
      <li>Your videos</li>
      <li>Your courses</li>
      <li>Watch later</li>
      <li>Liked videos</li>
      <li>Downloads</li>
      </ul>







    </div>
  )
}

export default Sidebar
