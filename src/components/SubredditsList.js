import React from 'react';
import { Link } from 'react-router-dom';
import './SubredditsList.css';
import SubredditRow from './SubredditRow';

const SubredditsList = props => {
  let visibility = props.selectedSubreddits.length > 0 ? 'visible' : 'hidden';

  return (
    <div className="SubredditList">
      <h2>Choose Subreddits</h2>
      <button style={{ visibility }}>
        <Link to="/posts">View Posts</Link>
      </button>
      <br />
      <ul>
        {props.subreddits.map(subreddit => {
          let selected = props.selectedSubreddits.indexOf(subreddit.url) !== -1;
          return (
            <SubredditRow
              selected={selected}
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
