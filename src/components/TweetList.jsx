import Tweet from "./Tweet";
import "../CSS/TweetList.css";
import { memo } from "react";

const MemoisedTweet = memo(Tweet); //this stops child component to re-render when parent re-renders
function TweetList({ tweets, onEditTweet }) {
  return (
    <ul className="tweet-list">
      {tweets.map((tweet) => (
        <li key={tweet.id} className="tweet-like-wrapper">
          <MemoisedTweet
            tweetid={tweet.id}
            content={tweet.content}
            likeCount={tweet.likeCount}
            createdAt={tweet.createdAt.toString()}
            onEdit={onEditTweet}
          />
        </li>
      ))}
    </ul>
  );
}
export default TweetList;
