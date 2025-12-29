import React from 'react'

function VideoCard({data}) {
    
    // console.log(data);
    const {snippet, statistics} = data;
    const {channelTitle,title,thumbnails }= snippet;
    
  return (
    <div className=' p-2 m-2 w-80  shadow-md'>
      <img className='rounded-lg' src ={thumbnails.medium.url} alt='Thumbnail'/>
      <ul>
        <li className='font-bold'>{title}</li>
        <li>{channelTitle}</li>
        <li> Views : {statistics.viewCount}</li>
      </ul>
        
    </div>
  )
}

// Higher Order Component
const AddVideoCard = ({ data }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard data={data} />
    </div>
  );
};

export { VideoCard, AddVideoCard };
