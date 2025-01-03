import React, { useState } from 'react';
import './VideoGallery.css'; // External CSS for styles
import longVid1 from '../vids/1.mp4';
import longVid2 from '../vids/2.mp4';
import longVid3 from '../vids/3.mp4';


const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(null); // Track the active video

  const handleVideoClick = (index, videoRef) => {
    if (activeVideo === index) {
      // Pause and reset the current active video
      videoRef.pause();
      videoRef.currentTime = 0;
      setActiveVideo(null);
    } else {
      // Play the new active video
      if (activeVideo !== null) {
        // Pause the previously active video
        const previousVideo = document.querySelector(`video[data-index="${activeVideo}"]`);
        if (previousVideo) {
          previousVideo.pause();
          previousVideo.currentTime = 0;
        }
      }
      videoRef.play();
      setActiveVideo(index);
    }
  };

  const videoSources = [
    longVid1, longVid2, longVid3,
    longVid1, longVid2, longVid3,
    longVid1, longVid2
  ];

  return (
    <section className="video-gallery-container">
      <div className="video-container">
        {videoSources.map((src, index) => (
          <div className="video" key={index}>
            <video
              src={src}
              data-index={index}
              className={activeVideo === index ? 'active' : ''}
              onClick={(e) => handleVideoClick(index, e.target)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
