import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import config from './config';
import HomePage from './home';
import PostPage from './post';
import PostInnerPage from './post/inner';

function App() {
  return (
    <BrowserRouter>
      <div style={{padding: '30px 60px'}}>
        <header>
          <p>Tribe Hired</p>
        </header>
        <div>
          <ul>
            <li>
              <Link to={config.paths.home}>Home</Link>
            </li>
            <li>
              <Link to={config.paths.posts}>Posts</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path={config.paths.home} component={HomePage} />
            <Route exact path={config.paths.posts} component={PostPage} />
            <Route exact path={`${config.paths.posts}/:pid`} component={PostInnerPage} />
          </Switch>
        
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
