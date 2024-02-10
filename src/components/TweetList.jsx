import Tweet from "./Tweet";
import "../CSS/TweetList.css";

function TweetList({ tweets }) {
  console.log(tweets);
  return (
    <ul className="tweet-list">
      {tweets.map((tweet) => (
        <li key={tweet.id} className="tweet-like-wrapper">
          <Tweet
            content={tweet.content}
            likeCount={tweet.likeCount}
            createdAt={tweet.createdAt.toString()}
          />
        </li>
      ))}
    </ul>
  );
}
export default TweetList;
