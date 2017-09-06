import React from 'react';

const SubredditRow = props => {
  const subRedditClick = () => {
    console.log(props.subreddit.url);
    props.onClick(props.subreddit.url);
  };
  return (
    <li>
      <h3 onClick={subRedditClick}>
        {props.subreddit.title}
      </h3>
      <p>
        {props.subreddit.description}
      </p>
    </li>
  );
};

export default SubredditRow;
