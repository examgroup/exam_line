<template>
  <div>
    <el-form label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
      <el-form-item label="老师姓名" prop="teacherName">
        <el-input v-model="formLabelAlign.teacherName"></el-input>
      </el-form-item>
      <el-form-item label="学院" prop="institute">
        <el-input v-model="formLabelAlign.institute"></el-input>
      </el-form-item>
      <el-form-item label="职称" prop="type">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="电话号码" prop="tel">
        <el-input v-model="formLabelAlign.tel"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件" prop="email">
        <el-input v-model="formLabelAlign.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="formLabelAlign.pwd"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="cardId">
        <el-input v-model="formLabelAlign.cardId"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="formLabelAlign.sex"></el-input>
      </el-form-item>
      <el-button type="danger" @click="add('formLabelAlign')" round>提交</el-button>
    </el-form>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "",
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          teacherName: '',
          institute: '',
          sex: '',
          tel: '',
          email    : '',
          pwd: '',
          cardId: '',
          type: '',
        },
      };
    },
    mounted(){
      var id =  this.$route.params.teacherId
      //通过id 去后台进行查询数据

      axios.get("/api/TeacherById/"+id).then(res=>{
        this.formLabelAlign=res.data;
      })


      this.formLabelAlign = {}
    },
    methods:{
      add:function (formName) {

        //验证
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //提交form表单
            axios.post("/api/TeacherUpdate",this.formLabelAlign).then(res=>{
              if (res.data=="1"){
                  alert("修改成功")
                this.$router.push("/teachertable")
              }else {
                alert("修改失败")
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        console.log(this.formLabelAlign)
      }
    }
  }
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
