import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../utils/constants';
import VideoCard from './VideoCard';

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

  return  videos && (
    <div className='flex'>
    {videos.map((vedio)=> <VideoCard data={vedio}/>)}
     
    </div>
  )
}

export default VideoContainer
