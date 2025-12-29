import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../utils/constants';
import {VideoCard ,AddVideoCard} from './VideoCard';
import {Link} from "react-router-dom";
function VideoContainer() {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
 
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await fetch(Youtube_API);
      if (!res.ok) {
        console.error('Fetch failed', res.status, res.statusText, res.url);
        return;
      }
      const json = await res.json();
      //  console.log('youtube json:', json);
      setVideos(json.items);
    } catch (err) {
      console.error('Error fetching videos:', err);
    }
  }
   function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  return  videos && (
    <div className='flex flex-wrap'>
    <AddVideoCard data={videos[getRandomInt(10)]} id ="id"/>
    {videos.map((vedio)=> (
      <Link to ={"/watch?v="+ vedio.id}> <VideoCard data={vedio} id ={vedio.id}/> </Link>
      ))}
     
    </div>
  )
}

export default VideoContainer
