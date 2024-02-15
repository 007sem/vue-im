<script  setup>
import { ref } from 'vue'
import http from "@/utils/http.js"

const emits = defineEmits(["creatSuccess"])
const name = ref('user')

function createChat (){
    http.post('/user/create_chat',{
        name:name.value
    }).then(res=>{
        console.log(res)
        if (res.data.code == 200) {
            name.value = ''
            emits("creatSuccess")
        } else {
            // TODO 错误提示
            alert(res.data.message)
        }
    })
}

</script>

<template>
    <!-- TODO 添加新的 input botton 组件 -->
    <div class='new_chat_pop'>
        <p>Please enter the name of the other.</p>
        <input type="text" placeholder="name" v-model="name">
        <button @click="createChat">确认</button>
    </div>
</template>

<style scoped lang='less'>
.new_chat_pop{
    display: flex;
    flex-direction: column;
    p{
        font-size: .8rem;
    }
}
</style>