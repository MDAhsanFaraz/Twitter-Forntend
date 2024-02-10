import Tweet from "./Tweet";
import "../CSS/TweetList.css";

function TweetList({ tweets, onEditTweet }) {
  return (
    <ul className="tweet-list">
      {tweets.map((tweet) => (
        <li key={tweet.id} className="tweet-like-wrapper">
          <Tweet
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
