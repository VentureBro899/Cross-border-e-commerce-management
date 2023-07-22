<template>
  <div id="login">
    <!--气泡-->
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <!--容器-->
    <div class="container">
      <form class="login-form">
        <h1 class="welcome">跨境电商借卖平台-登录</h1>
        <div class="input-group">
          <input type="text" id="username" placeholder="请输入用户名">
        </div>
        <div class="input-group">
          <input type="password" placeholder="请输入密码">
        </div>
        <div class="input-group">
          <button>登陆</button>
        </div>
      </form>
      <div class="other">
        <router-link to="/register">没有账户？去注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #fff;
}

/* 状态一: 未被访问过的链接 */
a:link {
  text-decoration: none;
  color: #fff;
}

/* 状态二: 已经访问过的链接 */
a:visited {
  text-decoration: none;
  color: #fff;
}

/* 状态三: 鼠标划过(停留)的链接(默认红色) */
a:hover {
  text-decoration: none;
  color: #fff;
}
/* 状态四: 被点击的链接 */
a:active {
  text-decoration: none;
  color: #fff;
}

#login {
  background: url(@/assets/img/bg1.jpg) no-repeat center;
  background-size: cover;
  height: 100vh;
}

/*气泡样式*/
.bg-bubbles {
  /* 绝对定位*/
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*溢出隐藏*/
  overflow: hidden;
}

li {
  position: absolute;
  bottom: -160px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  /*去掉自带的样式*/
  list-style: none;
  animation: square 15s infinite;
  transition-timing-function: linear;
}

li:nth-child(1) {
  left: 10%;
}

li:nth-child(2) {
  left: 23%;
  width: 60px;
  height: 60px;
  animation-delay: 8s;
  animation-duration: 7s;
}

li:nth-child(3) {
  left: 29%;
  width: 50px;
  height: 50px;
  /*动画延迟*/
  animation-delay: 7s;
}

li:nth-child(3) {
  left: 40%;
  width: 45px;
  height: 45px;
  /*动画的延续*/
  animation-duration: 8s;
  background-color: rgba(255, 255, 255, 0.3);
}

@keyframes square {
  0% {
    /*透明度*/
    opacity: 0.5;
    transform: translateY(8px) rotate(45deg);
  }

  25% {
    /*透明度*/
    opacity: 0.75;
    transform: translateY(-400px) rotate(87deg);
  }

  50% {
    /*透明度*/
    opacity: 1;
    transform: translateY(-600px) rotate(135deg);
  }

  100% {
    /*透明度*/
    opacity: 0;
    transform: translateY(-1000px) rotate(180deg);
  }
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  /* translate函數， 是css3新特性
    在不知道自身宽高的情况下，可以利用它来水平垂直
    (x,y)
    */
  transform: translate(-50%, -60%);
  width: 30%;
  min-width: 250px;
  margin: 0 auto;
}
.login-form {
  padding: 10px;
  text-align: center;
}
.welcome {
  font-size: 30px;
  color: #fff;
  padding-bottom: 10px;
  text-shadow: 1px 1px 1px #000;
}
.input-group {
  margin-top: 10px;
}
.input-group input,
.input-group button {
  box-sizing: border-box;
  padding: 8px 1px;
  width: 100%;
  border: none;
  border-radius: 2px;
  /*输入框只带轮廓*/
  outline: none;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
}
/* placeholder默认颜色修改*/
input::-webkit-input-placeholder {
  color: #fff;
}
.input-group button {
  font-weight: 700;
}
.input-group button:active {
  background: rgba(255, 255, 255, 0.5);
  color: rgba(0, 0, 0, 0.5);
}
</style>