<template>
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
</template>

<script>
export default {
  props:['openModuleStatus','userInfo'],
  setup(props, target){
    function changeModuleStatus(status){
      target.emit("changeModuleStatus",status);
    }
    return {changeModuleStatus}
  }
}
</script>

<style>

</style>