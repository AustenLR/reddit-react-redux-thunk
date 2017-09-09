import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditTopics, selectSubreddit } from '../actionCreators';
import SubredditsList from '../components/SubredditsList';

class SubredditsPage extends Component {
  componentDidMount() {
    if (this.props.subreddits.length === 0) {
      this.props.getSubreddits();
    }
  }

  render() {
    if (this.props.subreddits.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <SubredditsList
        subreddits={this.props.subreddits}
        selectedSubreddits={this.props.selectedSubreddits}
        onClick={this.props.onSubredditClick}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    subreddits: state.allSubreddits,
    selectedSubreddits: state.selectedSubreddits
  };
};

const mapDispatchToProps = dispatch => ({
  getSubreddits() {
    dispatch(getSubredditTopics());
  },
  onSubredditClick(subredditUrl) {
    dispatch(selectSubreddit(subredditUrl));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsPage);
