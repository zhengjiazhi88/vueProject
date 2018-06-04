import axios from 'axios';
import {Message} from 'element-ui';
import {OAUTH_LOGINNAME_API} from '@/utils/constant';
import {isExistOauthApi} from '@/utils/tools';

const TIME_OUT_MSG = '当前网络环境较差，请刷新重试';
const SYS_ERROR_MSG = '服务器运行错误';
const NO_OAUTH_MSG = '未配置用户权限';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 40000                  // 请求超时时间
});

function filterOauthData(config) {
  let url = config.url;
  if (config.method === 'get' && isExistOauthApi(url)) {
    if (config.hasOwnProperty('params')) {
      // config.params['loginName'] = window._loginName ? window._loginName : 'promace-ta';
      config.params['loginName'] = window._loginName ? window._loginName : 'wzzhudan';
    } else {
      config['params'] = {};
      // config.params['loginName'] = window._loginName ? window._loginName : 'promace-ta';
      config.params['loginName'] = window._loginName ? window._loginName : 'wzzhudan';
    };
  };
  return config;
}

// request拦截器
service.interceptors.request.use(
  config => {
    let copyConfig = Object.assign({}, config);
    copyConfig = filterOauthData(copyConfig);
    return copyConfig;
  },
  error => {
    Promise.reject(error);
  });

// respone拦截器
service.interceptors.response.use(
  // response => response,
  response => {
    const res = response.data;
    if (res.code === '200' || res.code === 200) {
      return res.body;
    } else {
      Message({
        message: res.msg,
        type: 'warning',
        duration: 3 * 1000
      });
      return Promise.reject(res);
    }
  },
  error => {
    let msg = SYS_ERROR_MSG;

    // 超时
    if (error.message.includes('timeout')) {
      msg = TIME_OUT_MSG;
    }
    // 获取用户名失败
    if (error.config && error.config.url.includes(OAUTH_LOGINNAME_API)) {
      msg = NO_OAUTH_MSG;
    }

    Message({
      message: msg,
      type: 'error',
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
