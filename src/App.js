import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import SubredditsPage from './containers/SubredditsPage';

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={SubredditsPage} />
        <Route component={FourOhFour} />
      </Switch>
    </Provider>
  </BrowserRouter>;

//<Route exact path="/posts" component={PostsPage} />
export default App;
