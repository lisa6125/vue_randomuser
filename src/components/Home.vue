<template>
  <div class="text-3xl font-bold underine bg-gray-100">
    <Navbar :nowListStatus="nowListStatus" @changeListStatus ="changeListStatus"/>
    <div class="xl:w-3/4 md:w-full px-10 pt-10 mx-auto">
      <div class="container mx-auto">
        <div
          role="list"
          v-show ="nowListStatus === 'group'"
          aria-label="Behind the scenes People "
          class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <div v-for="user in userData" :key="user.id.value" @click="getUserInfo(user)"
            role="listitem" class="xl:w-1/4 sm:w-3/4 md:w-2/5 relative mt-5 mb-16 mx-5 sm:mb-16 xl:max-w-sm lg:w-1/4 cursor-pointer"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
                <div class="absolute -mt-10 w-full flex justify-start">
                  <div
                    class="h-28 w-28 -ml-10 -mt-2 rounded-full"
                    :class="{
                      'bg-pink-200': user.gender === 'female',
                      'bg-blue-200': user.gender === 'male',
                    }"
                  ></div>
                </div>
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img :src="user.picture.medium"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-16 pr-5 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1">
                  {{ user.name.first }} {{ user.name.last }}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          role="list"
          v-show ="nowListStatus === 'list'"
          aria-label="Behind the scenes People "
          class="sm:flex items-center flex-wrap sm:justify-center"
        >
          <div v-for="user in userData" :key="user.id.value"
            role="listitem" class="lg:w-4/5 sm:w-3/4 relative mt-5 mb-16 mx-5 sm:mb-16 cursor-pointer"
            @click="getUserInfo(user)"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
                <div class="absolute -mt-10 w-full flex justify-start">
                  <div
                    class="h-28 w-28 -ml-10 -mt-2 rounded-full"
                    :class="{
                      'bg-pink-200': user.gender === 'female',
                      'bg-blue-200': user.gender === 'male',
                    }"
                  ></div>
                </div>
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img :src="user.picture.medium"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-20 pr-8 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1 pb-2 border-b-2">
                  {{ user.name.first }} {{ user.name.last }}
                </h1>
                <span class="text-sm text-gray-400 mr-5">email:{{user.email}}</span>
                <span class="text-sm text-gray-400">phone:{{user.phone}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px mb-12" aria-label="Pagination">
        <a v-show="nowPage>1" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" @click="pageChang(-1)">
          <span class="sr-only">Previous</span>
          <!-- Heroicon name: solid/chevron-left -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
        <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
        <a aria-current="page" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" :class="{'z-10 bg-indigo-50 border-indigo-500 text-indigo-600':nowPage===1}" @click="clickPage(1)"> 1 </a>
        <a v-show="nowPage<4" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" :class="{'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-50':nowPage===2}" @click="clickPage(2)"> 2 </a>
        <a v-show="nowPage<4" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium" :class="{'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-50':nowPage===3}" @click="clickPage(3)"> 3 </a>
        <span class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
        <a v-show="nowPage>=4 && nowPage<9" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium" @click="clickPage(nowPage -1)">{{nowPage -1}} </a>
        <a v-show="nowPage>=4 && nowPage<9" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-50">{{nowPage}} </a>
        <a v-show="nowPage>=4 && nowPage<9" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium" @click="clickPage(nowPage +1)">{{nowPage +1}} </a>
        <span v-show="nowPage>=4 && nowPage<9" class="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"> ... </span>
        <a v-show="nowPage>8" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" :class="{'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-50':nowPage===9}" @click="clickPage(9)"> 9 </a>
        <a v-show="nowPage>8" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" :class="{'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-50':nowPage===10}" @click="clickPage(10)"> 10 </a>
        <a class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" :class="{'z-10 bg-indigo-50 border-indigo-500 text-indigo-600 hover:bg-indigo-50':nowPage===11}" @click="clickPage(11)"> 11 </a>
        <a v-show="nowPage<11" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" @click="pageChang(1)">
          <span class="sr-only">Next</span>
          <!-- Heroicon name: solid/chevron-right -->
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </nav>
    </div>
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
import { inject } from "vue";

export default {
  name: "Home",
  components:{Navbar},
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
