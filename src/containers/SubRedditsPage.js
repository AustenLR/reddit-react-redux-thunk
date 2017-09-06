import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditTopics } from '../actionCreators';
import SubredditsList from '../components/SubredditsList';

class SubredditsPage extends Component {
  componentDidMount() {
    this.props.getSubreddits();
  }

  render() {
    console.log(Array.isArray(this.props.subreddits));
    if (this.props.subreddits.length === 0) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <SubredditsList subreddits={this.props.subreddits} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  subreddits: state.allSubreddits
});
const mapDispatchToProps = dispatch => ({
  getSubreddits() {
    dispatch(getSubredditTopics());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsPage);
