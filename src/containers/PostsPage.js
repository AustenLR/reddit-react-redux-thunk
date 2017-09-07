import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditPosts, showPostBody } from '../actionCreators';
import PostsList from '../components/PostsList';

class PostPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    console.log(this.props.postBodyDisplayed);
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
  getPosts() {
    dispatch(getSubredditPosts());
  },
  displayPostBody(postId) {
    dispatch(showPostBody(postId));
  }
});

const mapStateToProps = state => {
  const posts = [].concat.apply([], state.subredditPosts);
  return {
    posts: posts,
    postBodyDisplayed: state.displayedPostBodyId
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
