<template>
  <div style="background-color: white;min-height:400px">
    <div style="width:100%;height:80px;background-color: blue; overflow: hidden">
            <span class="demonstration" style=" margin-top:10px;font-size: 30px;float:left;padding-top:10px;color:white;margin-left:1%">
                在线考试后台管理平台
            </span>
      <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%"></span>
      <span class="demonstration" style="margin-top:10px;float:right;padding-top:10px;margin-right:1%">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link" style="font-size: 30px;color:white">
                    深田咏美<i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
            </span>
    </div>

    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:500px" @select="handleSelect">
              <el-menu-item index="1">权限列表</el-menu-item>
              <el-menu-item index="2">填空题管理</el-menu-item>
              <el-menu-item index="3">判断题管理</el-menu-item>
              <el-menu-item index="4">选择题管理</el-menu-item>
              <el-menu-item index="5">老师管理</el-menu-item>
              <el-menu-item index="6">学生管理</el-menu-item>
              <el-menu-item index="7">考试管理</el-menu-item>
              <el-menu-item index="8">留言板</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <!-- <div>
            <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="(item,index) in breadcrumbItems" :key="index">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div> -->

          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        searchCriteria: '',
        breadcrumbItems: [''],
      }
    },

    methods:{
      handleIconClick(ev) {
        console.log(ev);
      },

      handleSelect(key, keyPath){
        switch(key){
          case '1':
          this.$router.push('/RP');
          this.breadcrumbItems  = ['权限列表']
          break;
          case '2':
            this.$router.push('/getAllFill');
            this.breadcrumbItems  = ['填空题']
            break;
          case '3':
            this.$router.push('/getAllJudge')
            this.breadcrumbItems  = ['判断题']
            break;
          case '4':
            this.$router.push('/getAllMulti')
            this.breadcrumbItems  = ['选择题']
            break;
          case '5':
            this.$router.push('/teachertable')
            this.breadcrumbItems  = ['老师']
            break;
          case '6':
            this.$router.push('/studentTable')
            this.breadcrumbItems  = ['学生']
            break;
          case '7':
            this.$router.push('/exammanage')
            this.breadcrumbItems  = ['考试管理']
            break;
          case '8':
            this.$router.push('/message')
            this.breadcrumbItems  = ['留言板']
            break;
        
        
        }
      },
    },
  }
</script>
