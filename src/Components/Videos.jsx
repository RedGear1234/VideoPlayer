import React, { useState, useEffect } from "react";
import { fetchAPI } from "../api/fetchAPI";
import VideoCard from "./VideoCard";
import Search from "./Search";


const Videos = ({ videos }) => {
 
  if(!videos?.length) return "Loading..."

  return (
    <>
      <main>
        {videos.map((item, idx) => {
          return (
            <>
              <div key={item.id} >
                <VideoCard video={item} />
              </div>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Videos;
