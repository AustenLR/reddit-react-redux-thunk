import { combineReducers } from 'redux';
import { ADD_SUBREDDIT_TOPICS } from './actions';

const allSubreddits = (state = {}, action = {}) => {
  if (action.type === ADD_SUBREDDIT_TOPICS) {
    return Object.assign({}, state, action.payload);
  }
  return state;
};

const rootReducer = combineReducers({ allSubreddits });

export default rootReducer;
