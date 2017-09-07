import React from 'react';
import PostRow from './PostRow';
import { Link } from 'react-router-dom';

const PostsList = props => {
  return (
    <div>
      <button>
        <Link to="/">Select Subreddits</Link>
      </button>
      <ul>
        {props.posts.map(post => {
          return (
            <PostRow
              key={post.id}
              post={post}
              displayPostOnClick={props.displayPostOnClick}
              bodyDisplayedId={props.postBodyDisplayed}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PostsList;
