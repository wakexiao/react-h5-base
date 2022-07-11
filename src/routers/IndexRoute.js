import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SpinLoading } from 'antd-mobile';

import HomeLayout from '../components/layout/homeLayout';
import Home from '../pages/home';
const Space = lazy(() => import('../pages/space'));
const Mine = lazy(() => import('../pages/mine'));

const spinLaodingStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function IndexRoute() {
  return (
    <HomeLayout>
      <Suspense
        fallback={<SpinLoading color="primary" style={spinLaodingStyle} />}
      >
        <Switch>
          <Route path="/space" exact component={Space} />
          <Route path="/mine" exact component={Mine} />
          <Route path="/" exact component={Home} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </HomeLayout>
  );
}
