export const PICKER_OPTIONS_SHORTCUTS = [
  {
    text: '今天',
    onClick(picker) {
      const end = new Date();
      const start = new Date(new Date().toDateString());
      end.setTime(start.getTime());
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近一周',
    onClick(picker) {
      const end = new Date(new Date().toDateString());
      const start = new Date();
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString());
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString());
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      picker.$emit('pick', [start, end]);
    }
  }];
  /**
   * [PICKER_OPTIONS_SHORTCUTS_EMEW 监控预警曲线图使用]
   * @type {Array}
   */
export const PICKER_OPTIONS_SHORTCUTS_EMEW = [
  {
    text: '最近三天',
    onClick(picker) {
      const end = new Date(new Date().toDateString());
      const start = new Date();
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 3);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近一周',
    onClick(picker) {
      const end = new Date(new Date().toDateString());
      const start = new Date();
      start.setTime(end.getTime() - 3600 * 1000 * 24 * 7);
      picker.$emit('pick', [start, end]);
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date(new Date().toDateString());
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      picker.$emit('pick', [start, end]);
    }
  }];
// 报警级别颜色
export const ALARM_LEVEL_NORMAL = '#02acff';
export const ALARM_LEVEL_1 = '#d73c3f';
export const ALARM_LEVEL_2 = '#d27700';
export const ALARM_LEVEL_3 = '#c0b611';

// 用户权限相关内容
export const OAUTH_LOGINNAME_API = 'getUserCode';// 获取登录用户名的API
// 主数据共用接口权限的API
export const EMDM_DATA_OAUTH_API = [
  '/equipments/page',
  '/eadgAreas/select',
  '/eadgAreas/page',
  'eqp/api/equipments/page',
  'eqp/api/equipments',
  'eqp/api/eadgareas/page',
  'eqp/api/eadgareas',
  'eqp/api/equipment-usages/page',
  'eqp/api/equipment-usages',
  'eqp/api/eadgareas/select', // 级联获取所属界区下拉框数据
  'dic/api/dictionaries',
  'eqp/api/organizations/page',
  'eqp/api/equipmentFunctionpositionInfos/page',
  'eqpc/api/equipment-characters/page',
  'eqpc/api/equipment-character-singlevalues',
  'eqp/api/ex-technical-objects/page',
  'eqpc/api/ex-technical-object-character-values/page',
  'dic/api/dictionaries/page',
  'idx/api/indexs/page',
  'idx/api/dimensionconverts/page',
  'idx/api/measurementunits/page'
];

export const DATA_OAUTH_API = [...EMDM_DATA_OAUTH_API];
