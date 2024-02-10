import { useState, useCallback, memo } from "react";
import AddTweet from "./AddTweet";
import TweetList from "./TweetList";

const initialDummyTweets = [
  {
    id: 0,
    content: "we have new twitter called threads ",
    likeCount: 90,
    createdAt: new Date(),
  },
  { id: 1, content: "Farazzzzzz", likeCount: 10, createdAt: new Date() },
  {
    id: 2,
    content: "DAmmmmmmmmmmmmmmmm",
    likeCount: 20,
    createdAt: new Date(),
  },
];

const MemoisedTweet = memo(AddTweet);
function Twitter() {
  const [tweets, setTweets] = useState(initialDummyTweets); //creating a state component to manage the state of tweets
  const handleAddTweet = useCallback(
    (text) => {
      //this function will change the state and add new tweets inside tweets array
      let nextId = tweets.length > 0 ? tweets[tweets.length - 1].id + 1 : 0;
      setTweets([
        ...tweets,
        {
          content: text,
          likeCount: Math.floor(Math.random() * 10),
          id: nextId,
          createdAt: new Date(),
        },
      ]);
    },
    [tweets]
  );

  const handleEditTweet = useCallback(
    (tweet) => {
      //we will recieve updated tweet obj with same tweet id
      setTweets(
        tweets.map((currentTweet) => {
          //using map function as soon we find tweet obj with same id inside tweet array
          // we replace in the if() by returning the new tweet obj else we keep the other tweets obj same by returning
          // currentTweet
          if (currentTweet.id === tweet.id) {
            return tweet;
          } else {
            return currentTweet;
          }
        })
      );
    },
    [tweets]
  );
  const sortTweets = useCallback(() => {
    tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
    setTweets([...tweets]);
  }, [tweets]);
  return (
    <>
      <MemoisedTweet onAddTweet={handleAddTweet} />
      <button onClick={sortTweets}>Sort Tweet By CreatedAt</button>
      <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </>
  );
}
export default Twitter;
