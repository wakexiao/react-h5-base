import React, { lazy, Fragment } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  UserOutline,
} from 'antd-mobile-icons';

import Home from '../pages/home';
const Space = lazy(() => import('../pages/space'));
const Mine = lazy(() => import('../pages/mine'));

export default function IndexRoute() {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    history.push(value);
  };

  const tabs = [
    {
      key: '/',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/space',
      title: '空间',
      icon: <MessageOutline />,
    },
    {
      key: '/mine',
      title: '我的',
      icon: <UserOutline />,
    },
  ];

  return (
    <Fragment>
      <Switch>
        <Route path="/space" component={Space} />
        <Route path="/mine" component={Mine} />
        <Route path="/" component={Home} />
      </Switch>
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </Fragment>
  );
}
