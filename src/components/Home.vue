<template>
  <div class="text-3xl font-bold underine bg-gray-100">
    <Navbar :nowListStatus="nowListStatus" @changeListStatus ="changeListStatus"/>
    <UserContent :userData="userData" :nowListStatus="nowListStatus" @getUserInfo="getUserInfo"/>
    <Pagination :nowPage="nowPage" @clickPage="clickPage" @pageChang="pageChang"/>
<!-- open module -->
    <div class="mask" v-if="openModuleStatus" @click.self="changeModuleStatus(false)">
      <div class="close-btn cursor-pointer" @click="changeModuleStatus(false)">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="userInfo w-3/4 sm:w-3/4 lg:w-3/5">
        <div class="rounded overflow-hidden shadow-md bg-white">
          <div class="absolute -mt-20 w-full flex justify-center">
            <div class="h-32 w-32">
              <img :src="userInfo.picture.large" class="rounded-full object-cover h-full w-full shadow-md">
            </div>
          </div>
          <div class="px-6 mt-16">
            <div class="font-bold text-3xl text-center mb-1 border-b-2">{{userInfo.name.first}} {{userInfo.name.last}} <span class="ml-2 text-xl text-gray-500">{{userInfo.dob.age}}</span></div>
            <div class="user-detail flex flex-col justify-center items-start text-xl pt-4 pb-5 break-words">
            <p>gender:{{userInfo.gender}}</p>
            <p>country:{{userInfo.location.country}}</p>
            <p>email:{{userInfo.email}}</p>
            <p>phone:{{userInfo.phone}}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted,ref } from "vue";
import Navbar from './Navbar.vue';
import UserContent from './UserContent.vue';
import Pagination from './Pagination.vue';


import { inject } from "vue";

export default {
  name: "Home",
  components:{Navbar,UserContent,Pagination},
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
<style scoped>
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
