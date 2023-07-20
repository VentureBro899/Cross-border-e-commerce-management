<template>
  <div>
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <SideItem :tree="routes"> </SideItem>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SideItem from '@/components/layout/SideItem'

export default {
  components: {
    SideItem
  },
  data() {
    return {
      routes: [] //路由表
    }
  },
  created() {
    this.getRoutes()
  },
  mounted() {},
  methods: {
    getRoutes() {
      // 获取所有路由表
      this.routes = this.$router.options.routes
    }
  },
  computed: {}
}
</script>
