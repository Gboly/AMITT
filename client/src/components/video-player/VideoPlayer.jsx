import { useRef, useState } from "react";
import "./video-player.css";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-wrapper" onClick={togglePlay}>
      <div className="video-container">
        <video
          ref={videoRef}
          className="custom-video"
          src={src}
          poster={poster}
        />
        <div className={`overlay ${isPlaying ? "hide" : ""}`}>
          <span className="play-icon">▶</span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
