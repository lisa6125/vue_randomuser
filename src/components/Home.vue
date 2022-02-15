<template>
  <div class="text-3xl font-bold underine bg-gray-100">
    <Navbar :nowListStatus="nowListStatus" @changeListStatus ="changeListStatus"/>
    <UserContent :userData="userData" :nowListStatus="nowListStatus" @getUserInfo="getUserInfo"/>
    <Pagination :nowPage="nowPage" @clickPage="clickPage" @pageChang="pageChang"/>
<!-- open module -->
    <UserModule :openModuleStatus="openModuleStatus" :userInfo="userInfo" @changeModuleStatus="changeModuleStatus"/>
  </div>
</template>

<script>
import { onMounted,ref } from "vue";
import Navbar from './Navbar.vue';
import UserContent from './UserContent.vue';
import Pagination from './Pagination.vue';
import UserModule from './UserModule.vue';



import { inject } from "vue";

export default {
  name: "Home",
  components:{Navbar,UserContent,Pagination,UserModule},
  setup() {
    const axios = inject("axios");
    const userData = ref([]); 
    const nowPage = ref(1);
    const nowListStatus = ref('group');
    const openModuleStatus = ref(false);
    const userInfo = ref({});
    onMounted(() => {
      getUser();
    });
    function clickPage(page) { 
      nowPage.value = page;
      getUser()
      window.scroll({top: 0,behavior: 'smooth'});
    }
    function pageChang(num){
      nowPage.value = nowPage.value + num;
      getUser()
      window.scroll({top: 0,behavior: 'smooth'});
    }
    function changeListStatus(status){
      nowListStatus.value = status
    }
    function changeModuleStatus(status){
      openModuleStatus.value = status
    }
    function getUserInfo(user){
      userInfo.value = user;
      changeModuleStatus(true)
    }
    async function getUser() {
      let getResults = 30;
      if(nowPage.value === 11){
        getResults = 10;
      }
      await axios
        .get(
          `https://randomuser.me/api/?page=${nowPage.value}&results=${getResults}&inc=gender,name,picture,phone,email,dob,id,location`
        ) 
        .then((response) => {
          userData.value = response.data.results;

          console.log(response.data);
        });
    }
    return { getUser,userData,nowPage,clickPage,pageChang,nowListStatus,changeListStatus,openModuleStatus,userInfo,changeModuleStatus,getUserInfo };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mask{
  position: fixed;
  backdrop-filter: blur(2px);
  height: 100vh;
  width: 100vw;
  background: rgba(48, 48, 48, 0.678);
  top: 0;
  left: 0;
}
.userInfo{
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
}
.close-btn{
  width: 30px;
  height: 30px;
  position: absolute;
  right: 60px;
  top: 30px;
  color: rgb(199, 199, 199);
  transition: 0.2s all ease;
}
.close-btn:hover{
  color: rgb(255, 255, 255);
}
.user-detail{
  padding-left: 20%;
}
</style>
