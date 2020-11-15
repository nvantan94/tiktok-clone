import React, { useRef, useState } from 'react'
import VideoFooter from '../VideoFooter/VideoFooter';
import './Video.css';

function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video__wrapper">
      <video
        className="video"
        src="https://v16m.tiktokcdn.com/3edaadad01e8af0188901cc2cf736f50/5fb0dfc3/video/tos/alisg/tos-alisg-pve-0037c001/4b7d6254148247e7a4b86ecbc719ac3f/?a=1180&br=1862&bt=931&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202011150158480101150040520F069199&lr=tiktok&mime_type=video_mp4&qs=0&rc=M2pwb3J3ZjxweDMzNjgzM0ApODkzO2c8aDs3NztlOGhlOWdpZS9raGwtYGpfLS0wLzRzczIxY2EtYi8uYV4yMjAuY146Yw%3D%3D&vl=&vr="
          type="video/mp4" 
        onClick={handleVideoPress}
        ref={videoRef}
      >
      </video>
      <VideoFooter />
    </div>
  )
}

export default Video
