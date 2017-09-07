import React from 'react';

const PostRow = props => {
  const displayPost = () => props.displayPostOnClick(props.post.id);
  let postBody;
  if (props.bodyDisplayedId === props.post.id) {
    console.log(props.post);
    console.log(props.bodyDisplayedId);
    console.log(props.post.id);
    console.log(props.post.body);
    postBody = (
      <p>
        {props.post.body}
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
