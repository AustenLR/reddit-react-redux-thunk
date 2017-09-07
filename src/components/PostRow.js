import React from 'react';

const PostRow = props => {
  return (
    <li>
      <h4>
        {props.post.title}
      </h4>
    </li>
  );
};

export default PostRow;
