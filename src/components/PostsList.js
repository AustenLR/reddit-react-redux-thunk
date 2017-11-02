import React from 'react';
import PostRow from './PostRow';
import { Link } from 'react-router-dom';

const PostsList = props => {
  return (
    <div className="Posts">
      <button>
        <Link to="/">Reselect Subreddits</Link>
      </button>
      <div>
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
    </div>
  );
};

export default PostsList;
