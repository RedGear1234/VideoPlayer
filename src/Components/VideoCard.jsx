import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <section>
      <Link to={videoId ? `/video/${videoId}` : null}>
        <img
          src={snippet?.thumbnails?.high?.url || null}
          alt={snippet?.title}
        />
      </Link>
      <div className="card-content">
        <Link to={videoId ? `/video/${videoId}`: null}>
          <h3>{snippet?.title.slice(0,60) || null}</h3>
        </Link>
      </div>
    </section>
  );
};

export default VideoCard;
