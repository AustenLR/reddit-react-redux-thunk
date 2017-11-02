import { combineReducers } from 'redux';
import {
  ADD_SUBREDDIT_TOPICS,
  UPDATE_SELECTED_SUBREDDITS,
  ADD_SUBREDDIT_POSTS,
  SHOW_POST_BODY
} from './actions';

const allSubreddits = (state = [], action) => {
  if (action.type === ADD_SUBREDDIT_TOPICS) {
    return action.payload;
  }
  return state;
};

const selectedSubreddits = (state = [], action) => {
  if (action.type === UPDATE_SELECTED_SUBREDDITS) {
    return action.payload;
  }
  return state;
};

const subredditPosts = (state = {}, action) => {
  if (action.type === ADD_SUBREDDIT_POSTS) {
    return Object.assign({}, state, {
      [action.payload.id]: action.payload[action.payload.id]
    });
  }
  return state;
};

const displayedPostBodyId = (state = '', action) => {
  if (action.type === SHOW_POST_BODY) {
    return action.payload;
  }
  return state;
};

const rootReducer = combineReducers({
  allSubreddits,
  selectedSubreddits,
  subredditPosts,
  displayedPostBodyId
});

export default rootReducer;

//selectors

export function getUncachedSubreddits(state) {
  const currentSelectedSubreddits = state.selectedSubreddits;
  const filteredArr = currentSelectedSubreddits.filter(subreddit => {
    return !state.subredditPosts[subreddit];
  });
  return filteredArr;
}

export function getCachedPosts(state) {
  const currentSelectedSubreddits = state.selectedSubreddits;
  const reduceArr = currentSelectedSubreddits.reduce(
    (postsArray, subreddit) => {
      var posts = state.subredditPosts[subreddit];
      if (posts) {
        return postsArray.concat(posts);
      } else {
        return postsArray;
      }
    },
    []
  );
  return reduceArr;
}
