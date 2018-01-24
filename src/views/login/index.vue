<template>
  <section>
    <div class="wrapper">
      <div class="usr">
        <i-input placeholder="请输入用户名" v-model="usr"></i-input>
      </div>
      <div class="psd">
        <i-input placeholder="请输入密码" v-model="pwd"></i-input>
      </div>
      <div class="logBtn">
        <i-button type="info" style="width: 350px;" @click="login">登录</i-button>
      </div>
    </div>
  </section>
</template>
<script>
  import http from '../../utils/http'
  export default{
    data() {
      return {
        usr: '',
        pwd: ''
      }
    },
    methods: {
      login() {
//        http.post('/login.do', {
//          account: this.usr,
//          password: this.pwd
//        }).then(d => {
//          console.log(d)
//        })

        http.get('/login/json_login?param={"u":"' + 'rebortest' + '","p":"' + '123456' + '"%20,"r":0%20}').then(d => {
          console.log(d)
          if (d.data.data && d.data.data.login === true) {
            this.$router.push('/')
          }
        })
      }
    }
  }
</script>
<style>
  .wrapper{
    width: 500px;
    height: 350px;
    background-color: #d9d9d9;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
  }
  .usr,.psd,.logBtn{
    width:400px;
    margin: 50px auto;
  }
  .logBtn{
    width:350px;
  }
</style>
