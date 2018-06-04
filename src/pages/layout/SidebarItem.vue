<template>
    <div>
        <template v-for="item in routes">
            <el-submenu :index="item.name">
                <template slot="title">
                  <i :class="item.iconCls"></i>{{item.name}}
                </template>
                <template v-for="child in item.children">
                    <sidebar-item class='menu-indent' v-if='child.children&&child.children.length>0' :routes='[child]'> </sidebar-item>
                        <el-menu-item :index="item.path+'/'+child.path">
                            {{child.name}}
                        </el-menu-item>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>

    export default {
      name: 'SidebarItem',
      props: {
        routes: {
          type: Array
        }
      }
    }
</script>
<style lang="less"  scoped>
  .hideSidebar .menu-indent{
    display: block;
    text-indent: 10px;
  }
</style>
