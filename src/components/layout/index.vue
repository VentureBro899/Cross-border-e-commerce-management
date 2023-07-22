<template>
  <div>
    <el-row>
      <NavBar></NavBar>
    </el-row>
    <el-row>
      <el-col :span="4">
        <SideTree></SideTree>
      </el-col>
      <el-col :span="20">
        <Main></Main>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import SideTree from '@/components/layout/SideTree.vue'
import Main from '@/components/layout/Main.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideTree,
    Main
  }
}
</script>

<style>
</style>