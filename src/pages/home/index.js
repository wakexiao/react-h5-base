import React, { useState, useEffect } from 'react';
import { Swiper } from 'antd-mobile';

// import styles from './index.module.less';
import './index.less';
import { fetchBannerList } from '@/api';

export default function Home() {
  const [bannerList, setBannerList] = useState([]);

  const getBannerList = () => {
    fetchBannerList().then((res) => {
      setBannerList(res.data);
    });
  };
  useEffect(() => {
    getBannerList();
  }, []);

  const renderSwiperItem = () => {
    return bannerList.map((item, index) => (
      <Swiper.Item key={index}>
        <img src={item.image_url} alt="" />
      </Swiper.Item>
    ));
  };

  return (
    <div className="container">
      {/* <div className={styles['logo-wrap']}>
        <div className={styles.logo}>
          <img src="/img/logo.png" alt="" />
        </div>
        <div className={styles.right}>
          <div className={styles.search}>
            <img src="/img/search.png" alt="" />
          </div>
          <div className={styles.own}>
            <img src="/img/own.png" alt="" />
          </div>
        </div>
      </div> */}
      <div className="logo-wrap">
        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>
        <div className="right">
          <div className="search">
            <img src="/img/search.png" alt="" />
          </div>
          <div className="own">
            <img src="/img/own.png" alt="" />
          </div>
        </div>
      </div>
      <Swiper autoplay loop>
        {renderSwiperItem()}
      </Swiper>
    </div>
  );
}
