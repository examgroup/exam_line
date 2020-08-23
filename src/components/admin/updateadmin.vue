<template>
  <div id="login" >    
    <div class="bg">
      <el-row class="main-container">
      <el-col :lg="8" :xs="16" :md="10" :span="10">
        <div class="top">
          <i class="iconfont icon-kaoshi"></i><span class="title">更新页面</span>
        </div>
      <el-form  label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
      <div class="div-upload">
          <el-upload
            class="avatar-uploader"
            action="api/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imgUrl" :src="imgUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"> 上传头像</i>
          </el-upload>
      </div>
      <div class="div-item">
        <el-form-item label="adminId" prop="adminId" style="color: #33303065;">
            <el-input v-model="formLabelAlign.adminId"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="adminName" style="color: #303133;">
          <el-input v-model="formLabelAlign.adminName"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" style="color: #303133;">
            <el-input v-model="formLabelAlign.sex" ></el-input>
          </el-form-item>
        <el-form-item label="手机号" prop="tel" style="color: #303133;">
            <el-input v-model="formLabelAlign.tel"></el-input>
        </el-form-item>
        <el-form-item label="email" prop="email" style="color: #303133;">
            <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd" style="color: #303133;">
            <el-input v-model="formLabelAlign.pwd"></el-input>
        </el-form-item>
        <el-form-item label="身份证" prop="cardID" style="color: #303133;">
          <el-input v-model="formLabelAlign.cardID"></el-input>
        </el-form-item>
        <el-form-item label="权限" prop="role" style="color: #303133;">
            <el-input v-model="formLabelAlign.role"></el-input>
        </el-form-item>
        <el-button type="danger" @click="add('formLabelAlign')" round>提交</el-button>
        </div>
      </el-form>
    </el-col>
  </el-row>
</div>
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
            role:'',
            imgurl:''
          },
          imgUrl:'',
          
        rules: {
            adminName: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 5 个字符', trigger: 'blur' }
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
        handleAvatarSuccess(res, file) {
          this.imgUrl = URL.createObjectURL(file.raw);
          this.formLabelAlign.imgurl=res;
         
        },
      beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
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
  
/* element.style {
    width: 80px;
    color: #303133;
} */
  .form-input{
  width: 72%;
}
#login {
  /* position: absolute; */
  text-align: center;
  height: 100%;
  font-size: 18px;
  color: #303133;
  
  
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
  background: no-repeat url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598068261795&di=18b007fd16fe60b7b6716c6fc1df0e19&imgtype=0&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2Fday_121007%2F12100722202497df1ab9e4469e.jpg);

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
.div-upload{
  margin-top:30px;
}
  .div-item {
  margin-top:140px
}
.avatar-uploader .el-upload {
    position: absolute;
    left: 50%;
    width: 100px;
    margin-left: -50px;
    margin-top: -120px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    outline: 0;
}
/* .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 50px;
  } */

  .avatar-uploader-icon {
    margin-top:50px;
    font-size: 28px;
    color: #303133;
    width: 200px;
    height: 100px;
    /* line-height: 100px; */
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
