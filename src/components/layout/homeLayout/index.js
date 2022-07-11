import React from 'react'
import CustomTabBar from '../../tabBar'
import styles from './index.module.less'

export default function HomeLayout(props) {
  return (
    <div className={styles['home-layout']}>
      {props.children}
      <CustomTabBar />
    </div>
  )
}
