import { combineReducers } from 'redux';
import {
  ADD_SUBREDDIT_TOPICS,
  UPDATE_SELECTED_SUBREDDITS,
  ADD_SUBREDDIT_POSTS
} from './actions';

const allSubreddits = (state = [], action) => {
  if (action.type === ADD_SUBREDDIT_TOPICS) {
    return action.payload;
  }
  return state;
};

const selectedSubreddits = (state = [], action) => {
  if (action.type === UPDATE_SELECTED_SUBREDDITS) {
    console.log('in reducer, selectedSubreddits');
    console.log(action.payload);
    return action.payload;
  }
  return state;
};

const subredditPosts = (state = [], action) => {
  if (action.type === ADD_SUBREDDIT_POSTS) {
    console.log('in reducer, subredditPosts');
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  allSubreddits,
  selectedSubreddits,
  subredditPosts
});

export default rootReducer;
