import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSubredditTopics } from './actionCreators'

class SubredditsPage extends Component{
  componentDidMount(){
    this.props.getSubreddits()
  }

  render(){
    return(
        <div></div>
      )

  }

  const mapStateToProps = state => ({ 
      subredditUrl: state.allSubreddits
   })
  const mapDispatchToProps = (dispatch) => ({
    getSubreddits(){
      dispatch(getSubredditTopics())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SubredditsPage)