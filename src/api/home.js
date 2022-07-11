import http from '../utils/http';

/**
 * banner列表
 * @param params
 * @return {*}
 */
export const fetchBannerList = (params) => {
  return http.get('/public/banner/list', {
    params,
  });
};
