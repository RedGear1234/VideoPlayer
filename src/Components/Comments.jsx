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
      "X-RapidAPI-Key": "ea971d2c7cmsh8869a18b3ab2ecdp1448f0jsnb74b5f5d0cac",
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
      {comments.map((item) =>{
        return (
          <>
          <h2>{item.snippet?.topLevelComment.snippet.authorDisplayName}</h2>
          <p>{item.snippet?.topLevelComment.snippet.textDisplay}</p>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
