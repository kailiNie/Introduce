import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import   Home   from './routes/index.jsx';
import {Test} from './routes/test.jsx';
import { Login } from './routes/account/login.jsx';
import styles from './common.less';

function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <Route path="/" component={Home}></Route>
    </Router>
  );
}

export default RouterConfig;
