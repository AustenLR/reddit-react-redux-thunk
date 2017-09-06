import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditTopics, selectSubreddit } from '../actionCreators';
import SubredditsList from '../components/SubredditsList';

class SubredditsPage extends Component {
  componentDidMount() {
    this.props.getSubreddits();
  }

  render() {
    if (this.props.subreddits.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SubredditsList
          subreddits={this.props.subreddits}
          onClick={this.props.onSubredditClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subreddits: state.allSubreddits,
  selectedSubreddits: state.selectedSubreddits
});

const mapDispatchToProps = dispatch => ({
  getSubreddits() {
    dispatch(getSubredditTopics());
  },
  onSubredditClick(subredditUrl) {
    console.log(subredditUrl);
    dispatch(selectSubreddit(subredditUrl));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsPage);
