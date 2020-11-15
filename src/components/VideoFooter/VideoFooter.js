import React from 'react'
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import './VideoFooter.css'
import Ticker from 'react-ticker';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@sssangha</h3>
        <p>This is a video description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            { ({ index }) => (
              <>
                <p>I am a song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>

      <img className="videoFooter__record"
        src="https://static.thenounproject.com/png/2214683-200.png"
        alt=""
        />
    </div>
  )
}

export default VideoFooter
