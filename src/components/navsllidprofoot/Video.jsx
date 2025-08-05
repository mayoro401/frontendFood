import React from 'react'
import './Avantnav/Avantnav.css'

function Video() {
  return (
    <div className='video' id='video'>
      <video src='./images/video.mp4' autoPlay loop muted  width='100%' heigth='30%'/>
    </div>
  )
}

export default Video
