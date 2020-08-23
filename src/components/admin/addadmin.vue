<template>
  <div id="login" >    
        <div class="bg">
          <el-row class="main-container">
          <el-col :lg="8" :xs="16" :md="10" :span="10">
            <div class="top">
              <i class="iconfont icon-kaoshi"></i><span class="title">注册页面</span>
            </div>
            <div class="div-form">
            <el-form label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
          <div class="div-item">
          </el-form-item>
        <el-form-item label="姓名" prop="adminName">
          <el-input v-model="formLabelAlign.adminName"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formLabelAlign.sex"></el-input>
          </el-form-item>
        <el-form-item label="手机号" prop="tel">
            <el-input v-model="formLabelAlign.tel"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱" >
          <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>
        
        <el-form-item label="验证码" prop="code">
          <span>
          <el-input class="form-input" v-model="formLabelAlign.code"></el-input>
          <el-button type="primary" @click="sendMail()" >发送验证码</el-button>
        </span>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input v-model="formLabelAlign.pwd"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="cardID">
          <span><el-input v-model="formLabelAlign.cardID"></el-input></span>
        </el-form-item>
        <el-form-item label="权限" prop="role">
            <el-input v-model="formLabelAlign.role"></el-input>
        </el-form-item>
      <el-form-item>
        <span>
        <el-button type="primary" @click="submitForm('formLabelAlign')" style="margin-right:100px" >提交</el-button>
        <el-button @click="resetForm('formLabelAlign')" >重置</el-button>
      </span>
      </el-form-item>
    </div>
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
      name: "",
    data(){
      return{
        labelPosition: 'right',
        formLabelAlign: {       
          adminName: '',
          sex: '',
          tel: '',
          email:'',
          pwd:'',
          cardID:'',
          role:'',
          
        }, 
       
      rules: {
            adminName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ]

        }
      }
    },
    methods: {
      
      submitForm(formName){
       axios.post("/api/saveAdmin",this.formLabelAlign).then(res=>{
          if (res.data==1){
            alert("注册成功");
            this.$router.push("/login");

          }
          if (res.data==0){
            alert("注册失败")
          }
       })
      },
      sendMail:function () {
          axios.get("/api/sendMail?mail="+this.formLabelAlign.email).then(res=>{
            if (res.data==1){
              alert("发送成功")
            }
          })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  
    }

  }
</script>

<style scoped>
.form-input{
  width: 72%;
}
#login {
  /* position: absolute; */
  text-align: center;
  height: 100%;
  font-size: 14px;
  
  
}
.div-form{
  margin-top:30px;
}
#login .bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
  height: 100%;
  background: no-repeat url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598026135764&di=a659410fb9ef641787f2937e16f22aba&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20170330%2F20170330044723_a0c69f758cc90e87e8c8e620eb55308e_2.jpeg
);

  /* background-color: #b6bccdd1 !important; */
}
#login .main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#login .main-container .top {
  margin-top: 30px;
  font-size: 30px;
  /* color: #ff962a; */
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
