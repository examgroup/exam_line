<template>
  <div>
      <el-form label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
        <el-form-item label="姓名" prop="studentName">
          <el-input v-model="formLabelAlign.studentName"></el-input>
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
        <el-form-item label="身份证" prop="cardId">
          <el-input v-model="formLabelAlign.cardId"></el-input>
        </el-form-item>
        <el-form-item label="年级" prop="grade">
            <el-input v-model="formLabelAlign.grade"></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
            <el-input v-model="formLabelAlign.major"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="clazz">
            <el-input v-model="formLabelAlign.clazz"></el-input>
        </el-form-item>
        <el-form-item label="学院" prop="institute">
            <el-input v-model="formLabelAlign.institute"></el-input>
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
          studentId: '',
          studentName: '',
          grade: '',
          major: '',
          clazz: '',
          institute: '',
          tel: '',
          email: '',
          pwd: '',
          cardId: '',
          sex: '',
        },
      rules: {
            studentName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName){
       axios.post("/api/StudentSave",this.formLabelAlign).then(res=>{
          if (res.data==1){
            alert("添加成功");
            this.$router.push("/studenttable");

          }
          if (res.data==0){
            alert("添加失败")
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
