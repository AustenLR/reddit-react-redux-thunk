import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditPosts, showPostBody } from '../actionCreators';
import PostsList from '../components/PostsList';
import { getUncachedSubreddits, getCachedPosts } from '../reducers';

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
      <PostsList
        posts={this.props.posts}
        displayPostOnClick={this.props.displayPostBody}
        postBodyDisplayed={this.props.postBodyDisplayed}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts(uncachedSubredditsArray) {
    dispatch(getSubredditPosts(uncachedSubredditsArray));
  },
  displayPostBody(postId) {
    dispatch(showPostBody(postId));
  }
});

const mapStateToProps = state => {
  return {
    posts: getCachedPosts(state),
    uncachedSubreddits: getUncachedSubreddits(state),
    postBodyDisplayed: state.displayedPostBodyId
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
