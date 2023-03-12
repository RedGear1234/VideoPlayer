import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAPI } from "../api/fetchAPI";
import ReactPlayer from "react-player";
import Comments from "./Comments";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [Detail, setDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setDetail(data.items[0])
    );
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);


  if (!Detail?.snippet) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = Detail;


  return (
    <section className="ReactPlayer">
      <div className="react-player">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
        <h3>{title}</h3>
        <div className="channelTitle-div">
          <Link to={`/channel/${channelId}`} className="channelTitle">
            <h4>{channelTitle}</h4>
          </Link>
          <div className="like-div">
            <p>{parseInt(viewCount).toLocaleString()}</p>
            <p>{parseInt(likeCount).toLocaleString()}</p>
          </div>
        </div>

        <Comments videos={videos} />
      </div>
      <div className="sugessted-videos">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default VideoDetail;
