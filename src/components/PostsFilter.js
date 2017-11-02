import React from 'react';

const PostsFilter = props => {
  const displaySubredditFilter = category => {
    let backgroundColor =
      props.currentFilter === category ? '#e19df2' : '#f9f57f';
    return (
      <button
        key={category}
        style={{ backgroundColor }}
        onClick={() => props.updateSubredditFilter(category)}
      >
        {category}
      </button>
    );
  };
  return (
    <div className="PostsFilter">
      {displaySubredditFilter('All')}
      {props.categories.map(category => displaySubredditFilter(category))}
    </div>
  );
};

export default PostsFilter;
