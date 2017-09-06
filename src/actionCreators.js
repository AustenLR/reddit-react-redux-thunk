import axios from 'axios';
import _ from 'lodash';
import {
  ADD_SUBREDDIT_TOPICS,
  UPDATE_SELECTED_SUBREDDITS,
  ADD_SUBREDDIT_POSTS
} from './actions';

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

export function addSubredditPosts(posts) {
  return { type: ADD_SUBREDDIT_POSTS, payload: posts };
}

export function getSubredditPosts() {
  return (dispatch, getState) => {
    const selectedSubredditsArr = getState().selectedSubreddits;
    //if(selectedSubredditsArr.length === 0) return;
    const promises = selectedSubredditsArr.map(subreddit => {
      return axios
        .get(`https://www.reddit.com${subreddit}hot.json`)
        .then(response => {
          console.log(response);
          const children = response.data.data.children;
          console.log(children);
          return children.map(post => {
            return {
              id: post.data.id,
              subreddit: subreddit,
              title: post.data.title,
              body: post.data.selftext_html
            };
          });
        });
    });

    Promise.all(promises).then(subredditPostsArr => {
      console.log(subredditPostsArr);
      dispatch(addSubredditPosts(subredditPostsArr));
    });
  };
}
