import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import QuoraHeader from "./QuoraHeader";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import "./css/Quora.css";

function Quora() {

  const [posts, setPosts] = useState([]);
  const [toggleFeedUpdated, setIsFeedUpdated] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8000/api/questions")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res)
      })
      .catch((e) => {
        console.log(e);
      });
  }, [toggleFeedUpdated]);

  return (
    <div className="quora">
      <QuoraHeader toggleFeedUpdated={toggleFeedUpdated} setIsFeedUpdated={setIsFeedUpdated} />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed setIsFeedUpdated={setIsFeedUpdated} toggleFeedUpdated={toggleFeedUpdated} posts={posts} />
          <Widget />
        </div>
      </div>
    </div>
  );
}

export default Quora;
