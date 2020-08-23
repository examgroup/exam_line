<template>
<div id="login">
  <div class="bg">
    <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top">
          <i class="iconfont icon-kaoshi"></i><span class="title">管理员登录</span>
        </div>
        <div class="div-form" >
        <el-form style="size: 50%;width: 470px;" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="adminName">
              <el-input type="text" v-model="ruleForm.adminName" autocomplete="off" ></el-input>
            </el-form-item>
          <el-form-item label="密码" prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="margin-right:70px;margin-top:30px" >登录</el-button>
          <el-button @click="registry()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

      </el-col>
    </el-row>
  </div>

</div>


</template>
<script>
    import axios from 'axios';
  export default {
      name: '',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          adminName: '',
          pwd: ''  
          
        },
        rules: {
          pwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            axios.post("/api/login",this.ruleForm).then(res=>{
          if (res.data==1 & valid == true){
            alert("登录成功")
            this.$router.push("/theme")

          }
          if (res.data==0){
            alert("登录失败")
          }
       })
         
        });
      },
      registry(){
        this.$router.push("/addadmin/")
      }
    }
  }
</script>
<style lang="less" scoped>
.el-form-item {
    margin-bottom: 35px;
}
.div-form{
  width: 100%;
  margin-top:60px;
}
#login {
  
  text-align: center;
  font-size: 14px;
 
}
#login .bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598025803865&di=4d4567769e7b21645f644784f80119dc&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201511%2F07%2F20151107191711_H5LwP.jpeg
);
  /* background-color: #b6bccdd1 !important; */
}
#login .main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#login .main-container .top {
  margin-top: 100px;
  font-size: 30px;
  color: #ff962a;
  display: flex;
  justify-content: center;
}
#login .top .icon-kaoshi {
  font-size: 80px;
}
#login .top .title {
  margin-top: 20px;
}


  </style>