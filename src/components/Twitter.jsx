import { useState } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const initialDummyTweets = [
  { id: 0, content: "we have new twitter called threads ", likeCount: 90 },
  { id: 1, content: "Farazzzzzz", likeCount: 10 },
  { id: 2, content: "DAmmmmmmmmmmmmmmmm", likeCount: 20 },
];

function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets); //creating a state component to manage the state of tweets
  const handleAddTweet = (text) => {
    //this function will change the state and add new tweets inside tweets array
    let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id : 0;
    setTweets([
      ...tweets,
      { content: text, likeCount: Math.floor(Math.random() * 10), id: nextId },
    ]);
  };
  return (
    <>
      <AddTweet onAddTweet={handleAddTweet} />
      <TweetList tweets={tweets} />
    </>
  );
}
export default Twitter;
