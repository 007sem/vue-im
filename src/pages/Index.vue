<script setup>
import { ref } from "vue";
import { auth } from "@/utils/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const user = ref("");

// async function init (){

//     const aa = await auth()
//     console.log(aa)
// };
auth().then((res) => {
  if (res) {
    user.value = res;
    console.log(res)
  } else {
    router.push("/login");
  }
});

// init()
</script>

<template>
  <div class="index">
    <div class="menu">
      <img class="avatar" :src="user.avatar" alt="">
    </div>
    <div class="contact-list">
        contact-list
    </div>
    <div class="charts">
        charts
    </div>
  </div>
</template>

<style scoped lang="less">

.index{
    display: flex;
    height: 100vh;
    width: 100vw;
    .menu{
        background-color: #181818;
        padding: 1rem;
        border-right: 1px solid #222;
        .avatar{

            width: 3rem;
            height: 3rem;
            display: block;
            border-radius: 4px;

        }
    }
    .contact-list{
        background-color: #181818;
        color: #fff;
        min-width: 200px;
    }
}


</style>
