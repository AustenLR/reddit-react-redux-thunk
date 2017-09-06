import React from 'react';
import SubredditRow from './SubredditRow';

const SubredditsList = props => {
  console.log('SubredditsList');
  console.log(props.selectedSubreddits);
  return (
    <div>
      <h4>
        {props.selectedSubreddits}
      </h4>
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
    </div>
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
