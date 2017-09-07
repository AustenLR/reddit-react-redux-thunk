import React from 'react';
import PostRow from './PostRow';

const PostsList = props => {
  return (
    <ul>
      {props.posts.map(post => {
        return <PostRow key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default PostsList;
