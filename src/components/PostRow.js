import React from 'react';
import './Posts.css';

const PostRow = props => {
  const displayPost = () => props.displayPostOnClick(props.post.id);
  let postBody, thumbnail;
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
  if (props.post.thumbnail) {
    thumbnail = (
      <img className="thumbnail" src={props.post.thumbnail} alt="thumbnail" />
    );
  }
  return (
    <li>
      <div>
        {thumbnail}
        <h3 onClick={displayPost}>
          {props.post.title}
        </h3>
      </div>
      {postBody}
    </li>
  );
};

export default PostRow;
