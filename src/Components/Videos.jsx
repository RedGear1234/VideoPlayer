import React, { useState, useEffect } from "react";
import { fetchAPI } from "../api/fetchAPI";
import VideoCard from "./VideoCard"

const Videos = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setVideos(data.items))
  }, [selectedCategory]);


  return (
    <>
      <main>
        {videos.map((item , idx)=>{
          return (
            <>
              <div>
                <VideoCard video={item}/>
              </div>
            </>
          );
        })}
       
      </main>
    </>
  );
};

export default Videos;
