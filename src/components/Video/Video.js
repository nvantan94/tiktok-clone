import React, { useRef, useState } from "react";
import VideoFooter from "../VideoFooter/VideoFooter";
import VideoSidebar from "../VideoSidebar/VideoSidebar";
import "./Video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
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
  };

  return (
    <div className="video__wrapper">
      <video
        className="video"
        src={url}
        type="video/mp4"
        onClick={handleVideoPress}
        ref={videoRef}
      ></video>
      <VideoFooter 
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares} />
    </div>
  );
}

export default Video;
