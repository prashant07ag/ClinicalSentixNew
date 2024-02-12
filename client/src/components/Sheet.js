import React from "react";
import TweetList from "./TweetList";

const Sidebar = ({ tweetData = [], isOpen = true, date }) => {
  return (
    <div className={`sidebar ${isOpen && date ? "open" : ""}`}>
      <div className="content">
        <div className="mb-4">{date && <h2>Drug Reviews from {date} to now</h2>}</div>
        <TweetList tweetData={tweetData} />
      </div>
    </div>
  );
};

export default Sidebar;
