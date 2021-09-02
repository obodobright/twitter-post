import React, { useState } from "react";

function Tweet(props) {
  const [color, setColor] = useState("red");

  function handleClickandColor() {
    props.upLike(id);

    setColor("blue");
  }
  const { id, image, name, username, timeTweeted, tweet, comment, retweet, like } = props.user;
  return (
    <React.Fragment>
      <div>
        <img src={image} alt={name} />
        <div>
          <p>{name}</p>
          <span>{username}</span>
          <span>{timeTweeted}</span>
        </div>
        <p>{tweet}</p>
        <div>
          <button> {comment === null ? "comment" : comment}</button>
          <button onClick={() => props.upRetweet(id)}>
            {retweet === null ? "retweet" : retweet}
          </button>
          <button onClick={() => handleClickandColor()} style={{ color: color }}>
            {like}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Tweet;
