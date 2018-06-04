<template>
  <el-menu mode="vertical" theme="dark" router>
    <sidebar-item :routes='permission_routers'></sidebar-item>
  </el-menu>
</template>

<script>
  import SidebarItem from './SidebarItem';

  export default {
    components: {
      SidebarItem
    },
    data: function () {
      return {
        permission_routers: [
          {
            path: '',
            name: '权限管理',
            iconCls: 'el-icon-warning',
            children: [
              {path: 'units/QuickConfig', name: '快速配置'},
              {path: 'emdm/boundary', name: '应用维护'},
              {path: 'emdm/new-class-type', name: '授权维护'},
              {path: 'emdm/equipment-fls', name: '页面维护'},
              {path: 'emdm/equipments', name: '菜单场景维护'},
              {path: 'emdm/equipment-scs', name: '鉴权类维护'},
              {path: 'emdm/technical-parameters', name: '属性维护'},
              {path: 'emdm/index-types', name: '许可维护'},
              {path: 'emdm/indexs', name: '组织机构视图'},
              {path: 'emdm/meas-unit-types', name: '机构单元视图'},
              {path: 'emdm/dimension-conversion', name: '组织机构'},
              {path: 'emdm/meas-units', name: '机构单元'},
              {path: 'emdm/down-load', name: '用户维护'},
              {path: 'emdm/down-load', name: '操作维护'},
              {path: 'emdm/down-load', name: '机构性质维护'},
              {path: 'emdm/down-load', name: '机构单元类型'},
              {path: 'emdm/down-load', name: '用户锁'},
              {path: 'emdm/down-load', name: '日志维护'},
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-menu {
    min-height: 100%;
  }
</style>
