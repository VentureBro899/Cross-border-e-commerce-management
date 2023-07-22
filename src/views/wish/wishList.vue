<template>
  <div id="wishlist">
    <el-button type="success" icon="el-icon-delete" style="margin-bottom:12px;padding: 8px;" @click="deleteSelected">删除选中</el-button>
    <div v-for="(item,index) in wishItems" :key="index">
      <WishItemVue :id="item.id" :picture="item.picture" :title="item.title" :price="item.price" :sku="item.sku" @changeSelect="changeSelect"></WishItemVue>
    </div>

  </div>
</template>

<script>
import WishItemVue from '@/components/wish/WishItem.vue'
export default {
  data() {
    return {
      wishItems: [
        { id: 1, picture: 'https://img14.360buyimg.com/n1/jfs/t1/93644/27/10042/287170/5e135baaE386b5442/250f03462450bafc.jpg', title: '深入解析Java编译器：源码剖析与实例详解', price: 59.8, sku: 30568 },
        { id: 2, picture: 'https://img11.360buyimg.com/n1/jfs/t1/56162/28/24503/100684/64ba63d0Fbf9717f0/1efac85e2858c97e.jpg.avif', title: '奥马(Homa) 125升 双门省电小冰箱 小型电冰箱家用 出租房宿舍冷藏双开门两门二门 白色 BCD-125H', price: 688.0, sku: 30868 },
        { id: 3, picture: 'https://img10.360buyimg.com/n1/jfs/t1/179740/4/34928/79514/64baadd6Fb2258d3b/366533f4a620b217.jpg.avif', title: '星巴克（Starbucks）雪地白女神款随行杯高颜值咖啡杯桌面杯保冷355ml节日礼物', price: 239.0, sku: 25968 }
      ],
      multipleSelection: []
    }
  },
  components: { WishItemVue },
  methods: {
    changeSelect(id) {
      var i = this.multipleSelection.indexOf(id)
      if (i != -1) {
        this.multipleSelection.splice(i, 1)
      } else {
        this.multipleSelection.push(id)
      }
    },
    deleteSelected() {
      this.multipleSelection.forEach(i => {
        this.wishItems.forEach(item => {
          if (i == item.id) {
            this.wishItems.splice(this.wishItems.indexOf(item), 1)
          }
        })
      })
      this.multipleSelection = []
    }
  }
}
</script>

<style>
#wishlist {
  text-align: left;
}
</style>