<template>
    <div class="nav bg-blue-100 flex justify-end px-8 py-5">
      <div class="nav-icon mr-3 text-blue-300 cursor-pointer hover:text-blue-400" :class="{'text-blue-500':nowListStatus === 'group'}" @click="changeListStatus('group')">
        <i class="fas fa-th-large"></i>
      </div>
      <div class="nav-icon text-blue-300 cursor-pointer hover:text-blue-400" :class="{'text-blue-500':nowListStatus === 'list'}" @click="changeListStatus('list')">
        <i class="fas fa-th-list"></i>
      </div>
    </div>
</template>

<script>

export default {
  props:['nowListStatus'],
  setup(props, target){
    function changeListStatus(status){
      target.emit("changeListStatus",status);
    }
    return {changeListStatus}
  }

}
</script>

<style>

</style>