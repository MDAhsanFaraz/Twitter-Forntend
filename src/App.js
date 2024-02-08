import "./App.css";
import TweetList from "./components/TweetList";

const initialDummyTweets = [
  { id: 0, content: "we have new twitter called threads ", likeCount: 90 },
  { id: 1, content: "Farazzzzzz", likeCount: 10 },
  { id: 2, content: "DAmmmmmmmmmmmmmmmm", likeCount: 20 },
];

function App() {
  return (
    <div>
      <TweetList tweets={initialDummyTweets} />
    </div>
  );
}

export default App;
