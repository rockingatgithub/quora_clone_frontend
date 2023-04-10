import React from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";
import axios from "axios";

function Feed({ setIsFeedUpdated, toggleFeedUpdated, posts }) {
  
  return (
    <div className="feed">
      <QuoraBox />
      {posts.map((post, index) => (
        <Post setIsFeedUpdated={setIsFeedUpdated} toggleFeedUpdated={toggleFeedUpdated}  key={index} post={post} />
      ))}
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Feed;
