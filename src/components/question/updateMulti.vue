<template>
  <div>
    <el-form label-position="right" :rules="rules" label-width="80px" ref="formLabelAlign" :model="formLabelAlign">
      <el-form-item label="ID" prop="questionId">
        <el-input v-model="formLabelAlign.questionId"></el-input>
      </el-form-item>
      <el-form-item label="考试科目" prop="subject">
        <el-input v-model="formLabelAlign.subject"></el-input>
      </el-form-item>
      <el-form-item label="试题内容" prop="question">
        <el-input v-model="formLabelAlign.question"></el-input>
      </el-form-item>
      <el-form-item label="A" prop="answerA">
        <el-input v-model="formLabelAlign.answerA"></el-input>
      </el-form-item>
      <el-form-item label="B" prop="answerB">
        <el-input v-model="formLabelAlign.answerB"></el-input>
      </el-form-item>
      <el-form-item label="C" prop="answerC">
        <el-input v-model="formLabelAlign.answerC"></el-input>
      </el-form-item>
      <el-form-item label="D" prop="answerD">
        <el-input v-model="formLabelAlign.answerD"></el-input>
      </el-form-item>
      <el-form-item label="正确答案" prop="rightAnswer">
        <el-input v-model="formLabelAlign.rightAnswer"></el-input>
      </el-form-item>
      <el-form-item label="题目解析" prop="analysis">
        <el-input v-model="formLabelAlign.analysis"></el-input>
      </el-form-item>
      <el-form-item label="分数" prop="score">
        <el-input v-model="formLabelAlign.score"></el-input>
      </el-form-item>
      <el-form-item label="难度等级" prop="level">
        <el-input v-model="formLabelAlign.level"></el-input>
      </el-form-item>
      <el-form-item label="所属章节" prop="section">
        <el-input v-model="formLabelAlign.section"></el-input>
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
          questionId: '',
          subject: '',
          question: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: '',
          rightAnswer: '',
          analysis:'',
          score:'',
          level:'',
          section:''
        },
      };
    },
    mounted(){
      var id =  this.$route.params.questionId
      //通过id 去后台进行查询数据

      axios.get("/api/MultiByID/"+id).then(res=>{
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
            axios.post("/api/updateMulti",this.formLabelAlign).then(res=>{
              if (res.data=="success"){
                this.$router.push("/getAllMulti")
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
