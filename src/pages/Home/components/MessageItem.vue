<script  setup>
import { ref } from 'vue'
import Avatar from "@/components/Avatar/index.vue"

const props = defineProps(["data", "person"])

const avatar = ref("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/932.jpg")
const name = ref("user1")

console.log(props.data)
if(props.data.is_other_person_send){
    avatar.value = props.person.avatar
    name.value = props.person.name
}


</script>

<template>
    <div class='message-item'>
        <Avatar :src="avatar" size="2.4rem" />
        <div class="message-content">
            <div class="name">{{ name }}</div>
            <div class="content">
                {{ data.content }}
            </div>
        </div>
    </div>
</template>

<style scoped lang='less'>
.message-item{
    display: flex;
    margin-bottom: 1rem;
    max-width: 70%;
    .message-content{
        flex: 1;
        margin-left: .5rem;
    }
    .name{
        font-size: .9rem;
        color: #999;
    }
    .content{
        margin-top: .5rem;
        padding: .5rem;
        box-shadow: 0 0 10px #c9c9c9;
        border-radius: 4px;
    }
}
</style>