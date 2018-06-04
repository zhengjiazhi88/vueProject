import {DATA_OAUTH_API} from '@/utils/constant';

/**
 * 格式化时间
 * @param time {string} 需要格式化的时间
 * @param cFormat {string} 时间格式
 * @return {string} 格式化后的时间
 * @author TJ 2017/07/21
 * @example 略
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000;
    if (('' + time).length === 8 && ('' + time).indexOf('-') === -1 && ('' + time).indexOf('/') === -1) {
      time = time.substring(0, 4) + '-' + time.substring(4, 6) + '-' + time.substring(6, 8);
    };
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return timeStr;
}

/**
 * 将时间数组分割成开始时间和结束时间
 * @param time {array}
 * @return {object}
 * @author TJ 2017/08/01
 * @example 略
 */
export function formatTime(time) {
  if (Array.isArray(time)) {
    if (!time[0] || !time[1]) return false;
    var start = parseTime(time[0], '{y}-{m}-{d}');
    var end = parseTime(time[1], '{y}-{m}-{d}');
    return {
      start: start,
      end: end
    };
  }
  ;
  return false;
}

/**
 * 获取当前月份开始日期和结束日期
 * @return {object}
 * @author TJ 2017/08/01
 * @example 略
 */
export function getCurrentMonth() {

}

/**
 * 获取本月开始时间
 * @return {object}
 * @author TJ 2017/08/01
 * @example 略
 */
export function getMonthStartDate(cFormat) {
  const format = cFormat || '{y}-{m}-{d}';
  let now = new Date(); // 当前日期
  let nowMonth = now.getMonth(); // 当前月
  let nowYear = now.getYear(); // 当前年
  nowYear += (nowYear < 2000) ? 1900 : 0;
  let monthStartDate = new Date(nowYear, nowMonth, 1);
  return parseTime(monthStartDate, format);
}

/**
 * 获得本月的结束日期
 * @return {object}
 * @author TJ 2017/08/01
 * @example 略
 */
export function getMonthEndDate(cFormat) {
  const format = cFormat || '{y}-{m}-{d}';
  let now = new Date(); // 当前日期
  let nowMonth = now.getMonth(); // 当前月
  let nowYear = now.getYear(); // 当前年
  nowYear += (nowYear < 2000) ? 1900 : 0;
  let monthStartDate = new Date(nowYear, nowMonth, 1);
  let monthEndDate = new Date(nowYear, nowMonth + 1, 1);
  let days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);

  let endDate = new Date(nowYear, nowMonth, days);
  return parseTime(endDate, format);
}

/**
 * 判断请求的api是否是要追加权限的
 * @param api {String}
 * @return {boolean}
 * @author TJ 2017/08/01
 * @example 略
 */
export function isExistOauthApi(api) {
  let isExist = false;
  for (let itme of DATA_OAUTH_API) {
    if (api.includes(itme)) {
      isExist = true;
      break;
    }
  }
  return isExist;
}

/**
 * 权限API拼接用户名
 * @param api {String}
 * @return {boolean}
 * @author TJ 2017/08/01
 * @example 略
 */
export function getJoinOauthApi(url) {
  let name = window._loginName ? window._loginName : '';
  if (url.includes('?')) {
    url += '&createId=' + name;
  } else {
    url += 'createId=' + name;
  }
  return url;
}

/**
 * 配置Echart主题颜色
 * @author TJ 2017/10/17
 */
export function resgisterTheme(echart) {
/* eslint-disable */
let theme = {
  'color': [
    '#29d0b0',
    '#2d99ed',
    '#fd8667',
    '#72ccff',
    '#f7c5a0',
    '#d4a4eb',
    '#fdc547',
    '#76f2f2',
    '#da4d00',
    '#b0419e'
  ],
  'backgroundColor': 'transparents',
  'textStyle': {},
  'title': {
    'textStyle': {
      'color': '#ffffff'
    },
    'subtextStyle': {
      'color': '#dddddd'
    }
  },
  'line': {
    'itemStyle': {
      'normal': {
        'borderWidth': '1'
      }
    },
    'lineStyle': {
      'normal': {
        'width': '1'
      }
    },
    'symbolSize': '4',
    'symbol': 'circle',
    'smooth': true
  },
  'radar': {
    'itemStyle': {
      'normal': {
        'borderWidth': '4'
      }
    },
    'lineStyle': {
      'normal': {
        'width': '3'
      }
    },
    'symbolSize': '0',
    'symbol': 'circle',
    'smooth': true
  },
  'bar': {
    'itemStyle': {
      'normal': {
        'barBorderWidth': 0,
        'barBorderColor': '#ccc'
      },
      'emphasis': {
        'barBorderWidth': 0,
        'barBorderColor': '#ccc'
      }
    }
  },
  'pie': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      },
      'emphasis': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    }
  },
  'scatter': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      },
      'emphasis': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    }
  },
  'boxplot': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      },
      'emphasis': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    }
  },
  'parallel': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      },
      'emphasis': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    }
  },
  'sankey': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      },
      'emphasis': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    }
  },
  'funnel': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      },
      'emphasis': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    }
  },
  'gauge': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      },
      'emphasis': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    }
  },
  'candlestick': {
    'itemStyle': {
      'normal': {
        'color': '#fc97af',
        'color0': 'transparent',
        'borderColor': '#fc97af',
        'borderColor0': '#87f7cf',
        'borderWidth': '2'
      }
    }
  },
  'graph': {
    'itemStyle': {
      'normal': {
        'borderWidth': 0,
        'borderColor': '#ccc'
      }
    },
    'lineStyle': {
      'normal': {
        'width': '1',
        'color': '#ffffff'
      }
    },
    'symbolSize': '',
    'symbol': 'circle',
    'smooth': true,
    'color': [
      '#29d0b0',
      '#2d99ed',
      '#fd8667',
      '#72ccff',
      '#f7c5a0',
      '#d4a4eb',
      '#fdc547',
      '#76f2f2',
      '#da4d00',
      '#b0419e'
    ],
    'label': {
      'normal': {
        'textStyle': {
          'color': '#293441'
        }
      }
    }
  },
  'map': {
    'itemStyle': {
      'normal': {
        'areaColor': '#f3f3f3',
        'borderColor': '#999999',
        'borderWidth': 0.5
      },
      'emphasis': {
        'areaColor': 'rgba(255,178,72,1)',
        'borderColor': '#eb8146',
        'borderWidth': 1
      }
    },
    'label': {
      'normal': {
        'textStyle': {
          'color': '#893448'
        }
      },
      'emphasis': {
        'textStyle': {
          'color': 'rgb(137,52,72)'
        }
      }
    }
  },
  'geo': {
    'itemStyle': {
      'normal': {
        'areaColor': '#f3f3f3',
        'borderColor': '#999999',
        'borderWidth': 0.5
      },
      'emphasis': {
        'areaColor': 'rgba(255,178,72,1)',
        'borderColor': '#eb8146',
        'borderWidth': 1
      }
    },
    'label': {
      'normal': {
        'textStyle': {
          'color': '#893448'
        }
      },
      'emphasis': {
        'textStyle': {
          'color': 'rgb(137,52,72)'
        }
      }
    }
  },
  'categoryAxis': {
    'axisLine': {
      'show': true,
      'lineStyle': {
        'color': '#999999'
      }
    },
    'axisTick': {
      'show': false,
      'lineStyle': {
        'color': '#333'
      }
    },
    'axisLabel': {
      'show': true,
      'textStyle': {
        'color': '#e0e0e0'
      }
    },
    'splitLine': {
      'show': false,
      'lineStyle': {
        'color': [
          '#e6e6e6'
        ]
      }
    },
    'splitArea': {
      'show': false,
      'areaStyle': {
        'color': [
          'rgba(250,250,250,0.05)',
          'rgba(200,200,200,0.02)'
        ]
      }
    }
  },
  'valueAxis': {
    'axisLine': {
      'show': true,
      'lineStyle': {
        'color': '#999999'
      }
    },
    'axisTick': {
      'show': false,
      'lineStyle': {
        'color': '#333'
      }
    },
    'axisLabel': {
      'show': true,
      'textStyle': {
        'color': '#e0e0e0'
      }
    },
    'splitLine': {
      'show': false,
      'lineStyle': {
        'color': [
          '#e6e6e6'
        ]
      }
    },
    'splitArea': {
      'show': false,
      'areaStyle': {
        'color': [
          'rgba(250,250,250,0.05)',
          'rgba(200,200,200,0.02)'
        ]
      }
    }
  },
  'logAxis': {
    'axisLine': {
      'show': true,
      'lineStyle': {
        'color': '#999999'
      }
    },
    'axisTick': {
      'show': false,
      'lineStyle': {
        'color': '#333'
      }
    },
    'axisLabel': {
      'show': true,
      'textStyle': {
        'color': '#e0e0e0'
      }
    },
    'splitLine': {
      'show': false,
      'lineStyle': {
        'color': [
          '#e6e6e6'
        ]
      }
    },
    'splitArea': {
      'show': false,
      'areaStyle': {
        'color': [
          'rgba(250,250,250,0.05)',
          'rgba(200,200,200,0.02)'
        ]
      }
    }
  },
  'timeAxis': {
    'axisLine': {
      'show': true,
      'lineStyle': {
        'color': '#999999'
      }
    },
    'axisTick': {
      'show': false,
      'lineStyle': {
        'color': '#333'
      }
    },
    'axisLabel': {
      'show': true,
      'textStyle': {
        'color': '#e0e0e0'
      }
    },
    'splitLine': {
      'show': false,
      'lineStyle': {
        'color': [
          '#e6e6e6'
        ]
      }
    },
    'splitArea': {
      'show': false,
      'areaStyle': {
        'color': [
          'rgba(250,250,250,0.05)',
          'rgba(200,200,200,0.02)'
        ]
      }
    }
  },
  'toolbox': {
    'iconStyle': {
      'normal': {
        'borderColor': '#999999'
      },
      'emphasis': {
        'borderColor': '#666666'
      }
    }
  },
  'legend': {
    'textStyle': {
      'color': '#e0e0e0'
    }
  },
  'tooltip': {
    'axisPointer': {
      'lineStyle': {
        'color': '#cccccc',
        'width': 1
      },
      'crossStyle': {
        'color': '#cccccc',
        'width': 1
      }
    }
  },
  'timeline': {
    'lineStyle': {
      'color': '#87f7cf',
      'width': 1
    },
    'itemStyle': {
      'normal': {
        'color': '#87f7cf',
        'borderWidth': 1
      },
      'emphasis': {
        'color': '#f7f494'
      }
    },
    'controlStyle': {
      'normal': {
        'color': '#87f7cf',
        'borderColor': '#87f7cf',
        'borderWidth': 0.5
      },
      'emphasis': {
        'color': '#87f7cf',
        'borderColor': '#87f7cf',
        'borderWidth': 0.5
      }
    },
    'checkpointStyle': {
      'color': '#fc97af',
      'borderColor': 'rgba(252,151,175,0.3)'
    },
    'label': {
      'normal': {
        'textStyle': {
          'color': '#87f7cf'
        }
      },
      'emphasis': {
        'textStyle': {
          'color': '#87f7cf'
        }
      }
    }
  },
  'visualMap': {
    'color': [
      '#fc97af',
      '#87f7cf'
    ]
  },
  'dataZoom': {
    'backgroundColor': 'rgba(255,255,255,0)',
    'dataBackgroundColor': 'rgba(114,204,255,1)',
    'fillerColor': 'rgba(114,204,255,0.2)',
    'handleColor': '#72ccff',
    'handleSize': '100%',
    'textStyle': {
      'color': '#333333'
    }
  },
  'markPoint': {
    'label': {
      'normal': {
        'textStyle': {
          'color': '#293441'
        }
      },
      'emphasis': {
        'textStyle': {
          'color': '#293441'
        }
      }
    }
  }
};
echart.registerTheme('dark', theme);
/* eslint-enable */
}
