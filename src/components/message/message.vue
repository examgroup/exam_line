<!-- // 给我留言页面 -->
<template>
    <div>
    <div class="div-form">
        <div class="top">
            <i class="iconfont icon-kaoshi"></i><span class="title">留言板</span>
          </div>
    <el-form  label-width="80px" :model="formLabelAlign">
          <el-form-item label="title" prop="title" style="color: #303133;">
               <el-input v-model="formLabelAlign.title"></el-input>
          </el-form-item>
          <el-form-item label="content" prop="content" style="color: #303133;">
               <el-input v-model="formLabelAlign.content"></el-input>
          </el-form-item>
          <el-form-item>
                <el-button type="primary" @click="add('formLabelAlign')" round>提交留言</el-button>
         </el-form-item>
    </el-form>
  </div>
  <div class="all">
    <el-table :data="tableData" stripe style="width: 100%"> 
        <el-table-column prop="title" label="title" width="180"></el-table-column>
        <el-table-column prop="content" label="content" width="180"></el-table-column>
        <el-table-column prop="time" label="time" width="180"></el-table-column>
      </el-table>        
   </div>
</div>
</template>
<script>
    import axios from 'axios';
export default {
 
  data() {
    return {
        tableData:[],
        title: "",
        content: "",
        time:"",
        formLabelAlign:{
            title: '',
            content: ''
        }
     
    }
    
  },
  created() {
    axios.get("/api/getAllMessage").then(res=>{
        console.log(res.data);
        // alert(.content);
              this.tableData=res.data
          })
  },
 
  methods: {
    add(){
       
        axios.post("/api/addMessage",this.formLabelAlign).then(res=>{
            if (res.data==1){
            alert("留言成功");
            window.location.reload();
            this.$router.push("/message");

            }
            if (res.data==0){
            alert("留言失败")
            }
        }) 
    }
    
  }
}
</script>

<style lang="less" scoped>

#message {
  width: 980px;
  margin: 0 auto;
}
.title {
  margin: 20px;
}
.content {
  padding: 20px 0px;
}

#message .wrapper {
  background-color: #fff;
  padding: 20px;

}
</style>
