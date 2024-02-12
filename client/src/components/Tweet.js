import React from "react";

const Tweet = ({ tweet }) => {
  if(!tweet) return null;
  return (
    <div className="tweet">
      <div className="tweet-header">
        <span className="username">@sampleuser</span>
        <span className="date">{tweet?.date}</span>
      </div>
      <p className="message">{tweet.review}</p>
      <div className="tweet-footer">
        <span className="retweets">Retweets: {tweet.usefulCount}</span>
      </div>
    </div>
  );
};

export default Tweet;
