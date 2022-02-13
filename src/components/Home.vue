<template>
  <div class="text-3xl font-bold underine bg-gray-100">
    <div class="nav bg-blue-100 flex justify-end px-8 py-5">
      <div
        class="nav-icon mr-3 text-blue-300 cursor-pointer hover:text-blue-400"
      >
        <i class="fas fa-th-list"></i>
      </div>
      <div class="nav-icon text-blue-300 cursor-pointer hover:text-blue-400">
        <i class="fas fa-th-large"></i>
      </div>
    </div>
    <div class="xl:w-3/4 md:w-full px-10 pt-10 mx-auto">
      <div class="container mx-auto">
        <div
          role="list"
          aria-label="Behind the scenes People "
          class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
        >
          <div
            role="listitem"
            class="xl:w-1/5 sm:w-3/4 md:w-2/5 relative mt-5 mb-16 sm:mb-16 xl:max-w-sm lg:w-1/5"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                    alt="Display Picture of Andres Berlin"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-16 pr-5 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1">
                  Andres Berlin
                </h1>
              </div>
            </div>
          </div>
          <div
            role="listitem"
            class="xl:w-1/5 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-5 mb-16 sm:mb-16 xl:max-w-sm lg:w-1/5"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                    alt="Display Picture of Silene Tokyo"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-16 pr-5 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1">Silene Tokyo</h1>
              </div>
            </div>
          </div>
          <div
            role="listitem"
            class="xl:w-1/5 sm:w-3/4 md:w-2/5 relative mt-5 mb-16 sm:mb-16 xl:max-w-sm lg:w-1/5"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                    alt="Display Picture of Johnson Stone"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-16 pr-5 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1">
                  Johnson Stone
                </h1>
              </div>
            </div>
          </div>
          <div
            role="listitem"
            class="xl:w-1/5 sm:w-3/4 md:w-2/5 relative mt-5 mb-16 sm:mb-16 xl:max-w-sm lg:w-1/5"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img
                    src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                    alt="Display Picture of Dean Jones"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-16 pr-5 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1">Dean Jones</h1>
              </div>
            </div>
          </div>
          <div
            role="listitem"
            class="xl:w-1/5 sm:w-3/4 md:w-2/5 relative mt-5 mb-16 sm:mb-16 xl:max-w-sm lg:w-1/5"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img
                    src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                    alt="Display Picture of Rachel Adams"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-16 pr-5 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1">Rachel Adams</h1>
              </div>
            </div>
          </div>
          <div
            role="listitem"
            class="xl:w-1/5 sm:w-3/4 md:w-2/5 relative mt-5 mb-16 sm:mb-16 xl:max-w-sm lg:w-1/5"
          >
            <div class="rounded overflow-hidden shadow-md bg-white">
              <div class="absolute -mt-10 w-full flex justify-start">
                <div class="h-24 w-24 -ml-8">
                  <img
                    src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                    alt="Display Picture of Charles Keith"
                    role="img"
                    class="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <div class="pl-16 pr-5 mt-5 mb-5">
                <h1 class="font-bold text-xl text-center mb-1">
                  Charles Keith
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { inject } from "vue";

// import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const axios = inject("axios");

    onMounted(() => {
      getUser();
    });
    async function getUser() {
      await axios
        .get(
          "https://randomuser.me/api/?page=2&results=30&inc=gender,name,picture,phone,email,id"
        )
        .then((response) => {
          console.log(response.data);
        });
    }
    return { getUser };
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
</style>
