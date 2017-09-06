import { combineReducers } from 'redux';
import { ADD_SUBREDDIT_TOPICS, UPDATE_SELECTED_SUBREDDITS } from './actions';

const allSubreddits = (state = [], action = {}) => {
  if (action.type === ADD_SUBREDDIT_TOPICS) {
    return action.payload;
  }
  return state;
};

const selectedSubreddits = (state = [], action = {}) => {
  if (action.type === UPDATE_SELECTED_SUBREDDITS) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({ allSubreddits, selectedSubreddits });

export default rootReducer;
