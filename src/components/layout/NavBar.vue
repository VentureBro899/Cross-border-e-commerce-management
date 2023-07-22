<template>
  <div class="navbar">
    <h1>跨境电商借卖平台管理系统</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  margin: auto 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  margin: 0px;
  h1 {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    font-size: 25px;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
}
</style>