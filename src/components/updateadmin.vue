<template>
    <div>
      <el-form label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
        <el-form-item label="Id" prop="adminId">
            <el-input v-model="formLabelAlign.adminId"></el-input>
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
            adminId: '',
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
            { min: 3, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
          ]
        }
      };
      },
      mounted(){
       var a =  this.$route.params.adminId
       //通过id 去后台进行查询数据

        axios.get("/api/getAdminById/"+a).then(res=>{
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
              axios.post("/api/updateAdmin",this.formLabelAlign).then(res=>{
                if (res.data==1){
                  this.$router.push("/")
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
