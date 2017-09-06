import React from 'react';

const SubredditsList = props => {
  return (
    <ul>
      {props.subreddits.map(subreddit => {
        return (
          <li key={subreddit.url}>
            <h3>
              {subreddit.title}
            </h3>
          </li>
        );
      })}
    </ul>
  );
};

export default SubredditsList;

/*
      {props.subreddits.map(subreddit => {
        return (
          <li key={subreddit.url}>
            <h3> subreddit.title </h3>
          </li>
        );
      })}
*/
