import React from 'react';
import PostRow from './PostRow';

const PostsList = props => {
  return (
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
  );
};

export default PostsList;
