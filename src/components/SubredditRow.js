import React from 'react';

const SubredditRow = props => {
  const subRedditClick = () => {
    props.onClick(props.subreddit.url);
  };

  let backgroundColor = props.selected ? '#e19df2' : '#fff';
  return (
    <li>
      <div style={{ backgroundColor }} onClick={subRedditClick}>
        <h3>
          {props.subreddit.title}
        </h3>
        <p>
          {props.subreddit.description}
        </p>
      </div>
    </li>
  );
};

export default SubredditRow;
