function Tweet({ content, likeCount }) {
  return (
    <>
      <div className="tweet-content">{content}</div>
      <div className="likes">{likeCount} Likes</div>
    </>
  );
}

export default Tweet;
