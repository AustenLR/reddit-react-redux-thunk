import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getSubredditPosts,
  showPostBody,
  updateFilter
} from '../actionCreators';
import PostsList from '../components/PostsList';
import PostsFilter from '../components/PostsFilter';
import { getUncachedSubreddits, getFilteredCachedPosts } from '../reducers';

class PostPage extends Component {
  componentDidMount() {
    if (this.props.uncachedSubreddits.length !== 0) {
      this.props.getPosts(this.props.uncachedSubreddits);
    }
  }

  render() {
    if (this.props.posts.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <PostsFilter
          categories={this.props.subredditCategories}
          currentFilter={this.props.subredditFilter}
          updateSubredditFilter={this.props.updateSubredditFilter}
        />
        <PostsList
          posts={this.props.posts}
          displayPostOnClick={this.props.displayPostBody}
          postBodyDisplayed={this.props.postBodyDisplayed}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts(uncachedSubredditsArray) {
    dispatch(getSubredditPosts(uncachedSubredditsArray));
  },
  displayPostBody(postId) {
    dispatch(showPostBody(postId));
  },
  updateSubredditFilter(subreddit) {
    dispatch(updateFilter(subreddit));
  }
});

const mapStateToProps = state => {
  return {
    posts: getFilteredCachedPosts(state),
    subredditCategories: state.selectedSubreddits,
    subredditFilter: state.filterSubreddit,
    uncachedSubreddits: getUncachedSubreddits(state),
    postBodyDisplayed: state.displayedPostBodyId
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
