import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <>
      <section>
        <Link to={videoId ? `/video/${videoId}` : null}>
          <img
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            className="feed"
          />
        </Link>
      </section>
    </>
  );
};

export default VideoCard;
