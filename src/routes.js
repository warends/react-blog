import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostIndex from './components/post_index';
import PostNew from './components/post_new';
import PostDetail from './components/post_detail';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={PostIndex} />
    <Route path="posts/new" component={PostNew} />
    <Route path="posts/:id" component={PostDetail} />
  </Route>

);
