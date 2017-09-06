import axios from 'axios';
import _ from 'lodash';
import { ADD_SUBREDDIT_TOPICS, UPDATE_SELECTED_SUBREDDITS } from './actions';

export function addSubredditTopics(topics) {
  return { type: ADD_SUBREDDIT_TOPICS, payload: topics };
}

export function getSubredditTopics() {
  return dispatch => {
    axios
      .get('https://www.reddit.com/subreddits/default.json')
      .then(response => {
        //console.log(response);
        const children = _.get(response, 'data.data.children');
        //console.log(children);
        const childrenSorted = _.orderBy(children, 'data.subscribers', 'desc');
        //console.log(childrenSorted);
        const subredditArr = _.map(childrenSorted, subreddit => {
          return {
            title: _.get(subreddit, 'data.display_name'),
            description: _.get(subreddit, 'data.public_description'),
            url: _.get(subreddit, 'data.url')
          };
        });
        //console.log(subredditArr);
        //need to add to the dispatch function
        dispatch(addSubredditTopics(subredditArr));
      });
  };
}

export function selectSubreddit(subredditUrl) {
  //console.log('in actionCreator, selectSubreddit');
  return (dispatch, getState) => {
    let selectedSubredditsArr = getState().selectedSubreddits.slice();
    selectedSubredditsArr.push(subredditUrl);
    //console.log(updatedSelectedSubredditsArr);
    //const newSelectedTopicsArr = selectedSubredditsArr.concat(subredditUrl);
    dispatch({
      type: UPDATE_SELECTED_SUBREDDITS,
      payload: selectedSubredditsArr
    });
  };
}
