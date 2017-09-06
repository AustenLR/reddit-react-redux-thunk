import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditPosts } from '../actionCreators.js';

class PostPage extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.props.posts)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPosts() {
    dispatch(getSubredditPosts());
  }
});

const mapStateToProps = state => ({
  posts: state.subredditPosts
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
