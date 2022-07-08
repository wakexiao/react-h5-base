import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexRoute from './IndexRoute';

const RoutesConfig = () => {
  return (
    <Switch>
      <Route path="/" component={IndexRoute} />
    </Switch>
  );
};

export default RoutesConfig;
