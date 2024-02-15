<script  setup>
import { createApp, ref } from 'vue'

const emits = defineEmits(['createChat'])


function createChat (){
    emits("createChat")
}



</script>

<template>
    <div class='create-chat'>

        <i class="iconfont icon-groupctrl" ></i>
        <i class="iconfont icon-addto" @click="createChat"></i>

    </div>
</template>

<style scoped lang='less'>

.create-chat{
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin-bottom: .5rem;
    i{
        font-size: 1.5rem;
        margin-left: .5rem;
        cursor: pointer;
    }
}

</style>