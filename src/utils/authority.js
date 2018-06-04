/* eslint-disable */
import {getPageAuthority, getUserName} from '@/service/common';

export default {
  data() {
    return {
      isOauthAdd: true,
      isOauthEdit: true,
      isOauthDelete: true,
      isOauthExport: true,
      isOauthImport: true
    };
  },
  methods: {

  },
  created() {
  },
  mounted() {
  },
  beforeRouteEnter(to, from, next) {
    let defaultPageId = '';
    if (window.pageCodeSessionId === '' || window.pageCodeSessionId === null || typeof (window.pageCodeSessionId) === 'undefined') {
      let urlParamByMenue = window.location.href;
      if (urlParamByMenue.lastIndexOf('?') > 0) {
        urlParamByMenue = urlParamByMenue.substring(urlParamByMenue.lastIndexOf('?'), urlParamByMenue.length);
        if (urlParamByMenue.length > 0) {
          urlParamByMenue = urlParamByMenue.substring(1, urlParamByMenue.length);
          let urlParamByMenueArr = urlParamByMenue.split('&');
          for (let item of urlParamByMenueArr) {
            if (item.indexOf('pageCode') > -1) {
              let pageCodeParam = item.split('=');
              defaultPageId = pageCodeParam[1];
            }
          }
        }
      } else {
        defaultPageId = to.name;
      }
      window.pageCodeSessionId = defaultPageId;
    } else {
      defaultPageId = window.pageCodeSessionId;
    }
    // let routerName = to.name;
    let routerName = defaultPageId;
    let promise = new Promise((resolve, reject) => {
      if (!window._loginName) {
        getUserName().then(response => {
          let name = response.data.loginName;
          window._loginName = name;
          resolve(name);
        }).catch(()=>{
          reject();
        });
      } else {
        resolve(window._loginName);
      }
    });

    promise.then((loginName) => {
      getPageAuthority(loginName, routerName).then(response => {
        let str = response.data;
        // 处理权限
        next(vm => {
          // 没有添加权限的场景
          if (!str.includes('add')) {
            vm.isOauthAdd = false;
          };
          // 没有修改权限的场景
          if (!str.includes('modify')) {
            vm.isOauthModify = false;
          };
          // 没有删除权限的场景
          if (!str.includes('delete')) {
            vm.isOauthDelete = false;
          };
        });
      });
    }).catch(() => {
      next();
    });
  }
};
/* eslint-enable */
