import { useState } from "react";
import "../CSS/Tweet.css";

function Tweet({ content, likeCount, createdAt, onEdit, tweetid }) {
  const [isEditting, setIsEditting] = useState(false);
  return (
    <div className="tweet-wrapper">
      <div className="tweet-edit-wrapper">
        <div className="tweet-content">
          {isEditting ? (
            <input
              value={content}
              onChange={(e) => {
                onEdit({
                  id: tweetid,
                  content: e.target.value,
                  likeCount: likeCount,
                  createdAt: createdAt,
                });
              }}
            />
          ) : (
            content
          )}
        </div>
        <div className="edit-tweet">
          <button onClick={() => setIsEditting(!isEditting)}>
            {isEditting ? "Save" : "Edit"}
          </button>
        </div>
      </div>

      <div className="like-createdAt-wrapper">
        <div className="likes">{likeCount} Likes</div>
        <div className="created-at">
          <b>Tweeted at:</b> {createdAt}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
