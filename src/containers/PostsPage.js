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
      let textAlign = 'center';
      return <h4 style={{ textAlign }}>Fetching Posts...</h4>;
    }
    return (
      <div>
        <div className="PostsFilter">
          <div>
            <h2>Filter by Subreddit Category:</h2>
            <PostsFilter
              categories={this.props.subredditCategories}
              currentFilter={this.props.subredditFilter}
              updateSubredditFilter={this.props.updateSubredditFilter}
            />
          </div>
        </div>
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
