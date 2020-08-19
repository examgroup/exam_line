<template>
  <div>    
      <el-form label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
        <el-form-item label="姓名" prop="adminName">
          <el-input v-model="formLabelAlign.adminName"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
            <el-input v-model="formLabelAlign.sex"></el-input>
          </el-form-item>
        <el-form-item label="手机号" prop="tel">
            <el-input v-model="formLabelAlign.tel"></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email">
            <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input v-model="formLabelAlign.pwd"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="cardID">
          <el-input v-model="formLabelAlign.cardID"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="role">
            <el-input v-model="formLabelAlign.role"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
        <el-button @click="resetForm('formLabelAlign')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
      name: "",
    data(){
      return{
        formLabelAlign: {        
          adminName: '',
          sex: '',
          tel: '',
          email:'',
          pwd:'',
          cardID:'',
          role:''
        }, 
      rules: {
            adminName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  
    }

  }
</script>

<style scoped>

</style>
