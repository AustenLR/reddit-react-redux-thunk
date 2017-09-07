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
    console.log('in reducer, selectedSubreddits');
    console.log(action.payload);
    return action.payload;
  }
  return state;
};

const subredditPosts = (state = {}, action) => {
  if (action.type === ADD_SUBREDDIT_POSTS) {
    console.log('in reducer, subredditPosts');
    console.log(action.payload);
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

//selector

export function getUncachedSubreddits(state) {
  console.log('getUncachedSubreddits selector');
  const currentSelectedSubreddits = state.selectedSubreddits;
  console.log(currentSelectedSubreddits);
  const filteredArr = currentSelectedSubreddits.filter(subreddit => {
    console.log(state.subredditPosts);
    return !state.subredditPosts[subreddit];
  });
  console.log(filteredArr);
  return filteredArr;
}

export function getCachedPosts(state) {
  console.log('getCachedPosts');
  const currentSelectedSubreddits = state.selectedSubreddits;
  console.log(currentSelectedSubreddits);
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
  console.log(reduceArr);
  return reduceArr;
}
/*
two selectors
  1. Posts that are cached to be displayed
  2. Subreddits we need to make the API call for 

Post Page:
 - component did mount, calls API if needed

*/
