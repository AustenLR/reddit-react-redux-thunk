import React from 'react';
import SubredditRow from './SubredditRow';

const SubredditsList = props => {
  return (
    <ul>
      {props.subreddits.map(subreddit => {
        return (
          <SubredditRow
            key={subreddit.url}
            subreddit={subreddit}
            onClick={props.onClick}
          />
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
