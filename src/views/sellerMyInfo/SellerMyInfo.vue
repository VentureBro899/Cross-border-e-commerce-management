<template>
  <div>
    <div class="top_text">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="first_text">借卖方</el-breadcrumb-item>
        <el-breadcrumb-item class="last_text">我的信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-divider></el-divider>
    </div>
    <el-form
      class="myinfo_form"
      label-position="right"
      label-width="160px"
      :model="myinfo"
    >
      <el-form-item label="Name:">
        <el-input v-model="myinfo.name"></el-input>
      </el-form-item>
      <el-form-item label="Email:">
        <el-input v-model="myinfo.email"></el-input>
      </el-form-item>
      <el-form-item label="Fhone:">
        <el-input v-model="myinfo.fhone"></el-input>
      </el-form-item>
      <div class="btn">
        <el-button type="success" @click="save()">save</el-button>
        <el-button type="primary" @click="toMyStores()">My Stores</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myinfo: {
        name: "Lucy",
        email: "97656444@123.com",
        fhone: "13712341234",
      },
    };
  },
  methods: {
    save() {
      this.$message({
        type: "success",
        message: "保存成功!",
      });
      console.log(this.myinfo);
    },
    toMyStores() {
      this.$router.push("/sellerShopInformation");
    },
  },
};
</script>

<style>
.btn {
  float: right;
}
.top_text {
  line-height: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.myinfo_form {
  width: 460px;
}
</style>