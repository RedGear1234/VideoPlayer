import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../api/fetchAPI";

const Comments = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/commentThreads",
    params: { part: "snippet", videoId: `${id}`, maxResults: "50" },
    headers: {
      "X-RapidAPI-Key": "03ee2c943amsh1105d8c1e5e5686p1f9425jsn77de68fe0ea8",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .get(`https://youtube-v31.p.rapidapi.com/commentThreads`, options)
      .then((data) => setComments(data.data.items));
  }, []);

 


  return (
    <div className="commnets">
      <h2>Comments :</h2>
      {comments.map((item) =>{
        return (
          <>
          <h3>{item.snippet?.topLevelComment.snippet.authorDisplayName}</h3>
          <p>{item.snippet?.topLevelComment.snippet.textDisplay}</p>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
