import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  UserOutline,
} from 'antd-mobile-icons';

export default function TabBar(props) {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value) => {
    history.push(value);
  };
  const { tabs } = props;

  return (
    <div>
      <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}

const tabs = [
  {
    key: '/',
    title: '',
    icon: <AppOutline />,
  },
  {
    key: '/space',
    title: '',
    icon: <MessageOutline />,
  },
  {
    key: '/mine',
    title: '',
    icon: <UserOutline />,
  },
];

TabBar.defaultProps = {
  tabs
}
