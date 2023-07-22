<template>
  <div class="wishitem">
    <input type="checkbox" name="select" @click="selectbox">
    <img :src="picture">
    <div class="main">
      <span class="title">{{ title }}</span>
      <span class="price">￥{{ price }}</span>
      <span class="sku">{{ sku }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'picture', 'title', 'price', 'sku'],
  emits: ['changeSelect'],
  methods: {
    selectbox() {
      // 向父组件传值
      this.$emit('changeSelect', this.id)
    }
  }
}
</script>

<style lang="less" scoped>
.wishitem {
  display: flex;
  justify-content: flex-start;
  img {
    width: 200px;
    height: 250px;
    margin: 8px;
  }
  .main {
    display: flex;
    flex-direction: column;
    padding: 24px;
    span {
      margin-bottom: 12px;
      text-align: left;
    }
    .title .description {
      color: #f56c6c;
    }
    .price {
      color: #e4941b;
    }
  }
}
</style>