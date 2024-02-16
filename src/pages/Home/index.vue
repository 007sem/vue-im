<script setup>
import { ref } from "vue";
import { auth } from "@/utils/auth";
import { useRouter } from "vue-router";
// @ts-ignore
import ContactList from "./components/ContactList.vue";
import UserInfo from "./components/UserInfo.vue";
// @ts-ignore
import MessageList from "./components/MessageList.vue";
// @ts-ignore
import ToolsBar from "./components/ToolsBar.vue";
import InputBox from "./components/InputBox.vue";
import CreateChat from "./components/CreateChat.vue";

import NewChatPop from "./components/NewChatPop.vue";

const router = useRouter();
const user = ref("");
const chat_id = ref("");
const message_list = ref({})

const NewChatPopShow = ref(false);

function getData() {
  auth().then((res) => {
    if (res) {
      user.value = res.user;
      console.log(user.value.chat_list);
    } else {
      router.push("/login");
    }
  });
}

function creatSuccess() {
  NewChatPopShow.value = false;
  getData();
}
function createChat() {
  NewChatPopShow.value = !NewChatPopShow.value;
}

function selectChat(chat) {
  chat_id.value = chat;
  getMessageList(chat)
}

function getMessageList(){

}

getData();
</script>

<template>
  <div class="container">
    <div class="index">
      <div class="menu">
        <UserInfo :avatar="user.avatar" :username="user.username" />
        <CreateChat @createChat="createChat" />
        <NewChatPop @creatSuccess="creatSuccess" v-if="NewChatPopShow" />
        <ContactList :list="user.chat_list" @select="selectChat" :active="chat_id" />
      </div>
      <div class="charts">
        <MessageList :chat_id="chat_id"/>
        <ToolsBar :chat_id="chat_id"/>
        <InputBox :chat_id="chat_id"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
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
  .charts {
    flex: 1;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
}
</style>
