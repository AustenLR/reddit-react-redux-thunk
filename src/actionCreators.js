import axios from 'axios';
import _ from 'lodash';
import { ADD_SUBREDDIT_TOPICS } from './actions';

export function addSubRedditTopics(topics) {
  return { type: ADD_SUBREDDIT_TOPICS, payload: topics };
}

export function getSubredditTopics() {
  return dispatch => {
    axios
      .get('https://www.reddit.com/subreddits/default.json')
      .then(response => {
        console.log(response);
        const children = _.get(response, 'data.data.children');
        console.log(children);
        const childrenSorted = _.orderBy(children, 'data.subscribers', 'desc');
        console.log(childrenSorted);
        const subRedditArr = _.map(childrenSorted, subreddit => {
          return {
            title: _.get(subreddit, 'data.display_name'),
            description: _.get(subreddit, 'data.public_description'),
            url: _.get(subreddit, 'data.url')
          };
        });
        console.log(subRedditArr);
        //need to add to the dispatch function
        dispatch(addSubRedditTopics(subRedditArr));
      });
  };
}
