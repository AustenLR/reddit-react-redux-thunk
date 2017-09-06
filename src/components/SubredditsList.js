import React from 'react';
import { Link } from 'react-router-dom';
import SubredditRow from './SubredditRow';

const SubredditsList = props => {
  return (
    <div>
      <h4>
        {props.selectedSubreddits}
      </h4>
      <button>
        <Link to="/posts">View posts</Link>
      </button>
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
