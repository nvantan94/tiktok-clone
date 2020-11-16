import React, { useState, useEffect } from 'react';

import './App.css';
import { fetchVideos } from './api/index';

import Video from './components/Video/Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function retrieveVideos() {
      const { data } = await fetchVideos();
      setVideos(data);
    }
  retrieveVideos();
  }, [])

  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.length?
            videos.map((video, i) => (
              <Video
                key={`video_${i}`}
                url={video.url}
                channel={video.channel}
                description={video.description}
                song={video.song}
                likes={+video.likes}
                messages={+video.messages}
                shares={+video.shares}
              />
            )) : (<p>Loading...</p>)
        }
      </div>
    </div>
  );
}

export default App;
