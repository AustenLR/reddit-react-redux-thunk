import React from 'react';

const PostRow = props => {
  const displayPost = () => props.displayPostOnClick(props.post.id);
  let postBody;
  if (props.bodyDisplayedId === props.post.id) {
    let text = props.post.body
      ? props.post.body
      : 'This post does not contain a body';
    postBody = (
      <p>
        {text}
      </p>
    );
  }
  return (
    <li>
      <h4 onClick={displayPost}>
        {props.post.title}
      </h4>
      {postBody}
    </li>
  );
};

export default PostRow;
