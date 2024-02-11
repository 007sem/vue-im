<script setup>
import { ref } from "vue";
import http from "@/utils/http";
import config from "@/config";
import { useRouter } from "vue-router";

const data = {
  username: "user2",
  password: "123456",
};

const username = ref("user1");
const password = ref("123456");

const router = useRouter();

//  http.get("/rejest",{
//     params:data
//  }).then(res=>{
//     console.log(res)
//  })

async function login() {
  const { data } = await http.post("/user/login", {
    username: username.value,
    password: password.value,
  });
  if(data.token){
    localStorage.setItem(config.TOKEN_NAME,data.token)
    router.push("/")
  }
}
</script>

<template>
  <div class="login">
    <div class="input">
      <div class="lable">username</div>
      <input type="text" v-model="username" />
    </div>
    <div class="input">
      <div class="lable">password</div>
      <input type="password" v-model="password" />
    </div>

    <button @click="login">login</button>
  </div>
</template>

<style scoped lang="less">
.input {
  padding: 1rem;
  display: flex;
}
</style>
