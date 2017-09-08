import axios from 'axios';
import _ from 'lodash';
import {
  ADD_SUBREDDIT_TOPICS,
  UPDATE_SELECTED_SUBREDDITS,
  ADD_SUBREDDIT_POSTS,
  SHOW_POST_BODY
} from './actions';

export function addSubredditTopics(topics) {
  return { type: ADD_SUBREDDIT_TOPICS, payload: topics };
}

export function getSubredditTopics() {
  return dispatch => {
    axios
      .get('https://www.reddit.com/subreddits/default.json')
      .then(response => {
        const children = _.get(response, 'data.data.children');
        const childrenSorted = _.orderBy(children, 'data.subscribers', 'desc');
        const subredditArr = _.map(childrenSorted, subreddit => {
          return {
            title: _.get(subreddit, 'data.display_name'),
            description: _.get(subreddit, 'data.public_description'),
            url: _.get(subreddit, 'data.url')
          };
        });
        dispatch(addSubredditTopics(subredditArr));
      });
  };
}

export function selectSubreddit(subredditUrl) {
  return (dispatch, getState) => {
    let selectedSubredditsArr = getState().selectedSubreddits.slice();
    const selectedSubredditIndex = selectedSubredditsArr.indexOf(subredditUrl);
    if (selectedSubredditIndex !== -1) {
      selectedSubredditsArr.splice(selectedSubredditIndex, 1);
    } else {
      selectedSubredditsArr.push(subredditUrl);
    }
    dispatch({
      type: UPDATE_SELECTED_SUBREDDITS,
      payload: selectedSubredditsArr
    });
  };
}

export function addSubredditPosts(subredditPostsObj) {
  return { type: ADD_SUBREDDIT_POSTS, payload: subredditPostsObj };
}

export function getSubredditPosts(subreddits) {
  return dispatch => {
    //const selectedSubredditsArr = getState().selectedSubreddits;
    //if(selectedSubredditsArr.length === 0) return;
    const promises = subreddits.map(subreddit => {
      return axios
        .get(`https://www.reddit.com${subreddit}hot.json`)
        .then(response => {
          const children = response.data.data.children;
          let subredditPostArr = children.map(post => {
            return {
              id: post.data.id,
              subreddit: subreddit,
              title: post.data.title,
              body: post.data.selftext,
              thumbnail: post.data.thumbnail
            };
          });
          let subredditObj = {
            id: subreddit,
            [subreddit]: subredditPostArr
          };
          return subredditObj;
        });
    });

    Promise.all(promises).then(subredditsPostsArr => {
      subredditsPostsArr.forEach(subredditPostsObj => {
        dispatch(addSubredditPosts(subredditPostsObj));
      });
    });
  };
}

export function showPostBody(postId) {
  return { type: SHOW_POST_BODY, payload: postId };
}
