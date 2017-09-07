import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditPosts } from '../actionCreators';
import PostsList from '../components/PostsList';

class PostPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    console.log(this.props.posts);
    if (this.props.posts.length === 0) {
      return <div>Loading...</div>;
    }
    return <PostsList posts={this.props.posts} />;
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts() {
    dispatch(getSubredditPosts());
  }
});

const mapStateToProps = state => {
  const posts = [].concat.apply([], state.subredditPosts);
  return {
    posts: posts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
