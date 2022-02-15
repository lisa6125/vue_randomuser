<template>
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
</template>

<script>
export default {
  props:['nowListStatus','userData'],
  setup(props, target){
    function getUserInfo(user){
      target.emit("getUserInfo",user);
    }
    return {getUserInfo}
  }
}
</script>

<style>

</style>