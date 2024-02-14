<script setup>
import { ref } from "vue";
import { auth } from "@/utils/auth";
import { useRouter } from "vue-router";
import ContactList from "./components/ContactList.vue";
import UserInfo from "./components/UserInfo.vue";
import MessageList from "./components/MessageList.vue";
import ToolsBar from "./components/ToolsBar.vue";
import InputBox from "./components/InputBox.vue";




const router = useRouter();
const user = ref("");

auth().then((res) => {
  if (res) {
    user.value = res.user;
    console.log(res);
  } else {
    router.push("/login");
  }
});

// init()
</script>

<template>
  <div class="container">
    <div class="index">
    <div class="menu">
      <UserInfo :avatar="user.avatar" :username="user.username"/>
      <ContactList />
    </div>
    <div class="charts">
      <MessageList />
      <ToolsBar />
      <InputBox />
    </div>
  </div>
  </div>
  
</template>

<style scoped lang="less">
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #222;
}
.index {
  display: flex;
  width: 70rem;
  height: 36rem;
  border-radius: 8px;
  overflow: hidden;
  .menu {
    background-color: #181818;
    padding: 1rem;
    color: #fff;
    border-right: #222;
    
  }
  .charts{
    flex: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
}
</style>
