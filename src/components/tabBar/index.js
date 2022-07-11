import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import styles from './index.module.less';
import homeIcon from '../../static/home.png';
import homeActiveIcon from '../../static/home-active.png';
import spaceIcon from '../../static/space.png';
import spaceActiveIcon from '../../static/space-active.png';
import mineIcon from '../../static/mine.png';
import mineActiveIcon from '../../static/mine-active.png';

export default function CustomTabBar(props) {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value) => {
    history.push(value);
  };
  const { tabs } = props;

  const renderTabItem = () => {
    return tabs.map((item, index) => {
      const { key, title, icon, activeIcon } = item;
      const activeKey = pathname === key;
      return (
        <div
          className={styles['tab-bar-item']}
          key={index}
          onClick={() => setRouteActive(key)}
        >
          <div className={styles['tab-bar-icon-wrap']}>
            <img
              className={styles['tab-bar-icon']}
              src={activeKey ? activeIcon : icon}
              alt={title}
            />
          </div>
          {title && (
            <div
              className={classNames(styles['tab-bar-name'], {
                [styles['tab-bar-active-name']]: activeKey,
              })}
            >
              {title}
            </div>
          )}
        </div>
      );
    });
  };

  return <div className={styles['tab-bar-wrap']}>{renderTabItem()}</div>;
}

const tabs = [
  {
    key: '/',
    title: '',
    icon: homeIcon,
    activeIcon: homeActiveIcon,
  },
  {
    key: '/space',
    title: '',
    icon: spaceIcon,
    activeIcon: spaceActiveIcon,
  },
  {
    key: '/mine',
    title: '',
    icon: mineIcon,
    activeIcon: mineActiveIcon,
  },
];

CustomTabBar.defaultProps = {
  tabs,
};
