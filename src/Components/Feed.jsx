import React, { useState, useEffect } from "react";
import { fetchAPI } from "../api/fetchAPI";
import Videos from "./Videos";

const Feed = () => {
  const categories = [
    { name: "Coding" },
    { name: "New" },
    { name: "ReactJS" },
    { name: "NextJS" },
    { name: "Music" },
    { name: "Education" },
    { name: "Podcast" },
    { name: "Movie" },
    { name: "Gaming" },
    { name: "Live" },
    { name: "Sport" },
    { name: "Fashion" },
    { name: "Beauty" },
    { name: "Comedy" },
    { name: "Gym" },
    { name: "apple" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Coding");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <section>
      <div className="feed-">
        {categories.map((category) => (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(category.name)}
            style={{
              background: category.name === selectedCategory && "#FC1503",
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
                opacity: category.name === selectedCategory ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      </div>
      <div>
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default Feed;
