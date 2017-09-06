import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SubredditsPage from './containers/SubredditsPage';
import PostsPage from './containers/PostsPage';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={SubredditsPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route component={FourOhFour} />
      </Switch>
    </Provider>
  </BrowserRouter>;

export default App;
