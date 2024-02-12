import React from "react";
import Tweet from "./Tweet"; // Import the Tweet component
const TweetList = ({ tweetData }) => {
  return (
    <div>
      {tweetData.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
