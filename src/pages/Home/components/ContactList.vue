<script setup>
import { ref } from "vue";
import Avatar from "@/components/Avatar/index.vue";

const props = defineProps(["list"])
</script>

<template>
  <div class="contact-list">
    <div
      class="contact-item"
      :class="item.active ? 'active' : ''"
      v-for="item in props.list"
      :key="item.name"
    >
      <Avatar :src="item.avatar" size="2.4rem" />
      <div class="text">
        <div>{{ item.name }}</div>
        <div>{{ item.last_message.content }} &nbsp;</div>
      </div>
      <div class="time">{{ item.last_message.time }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.contact-list {
  background-color: #181818;
  min-width: 240px;
}
.contact-item.active{
    background-color: #222;
}
.contact-item {
  display: flex;
  align-items: center;
  padding: .4rem;
  margin-bottom: 0.3rem;
  border-radius: 4px;
  cursor: pointer;
  .text {
    margin: 0 0.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;

    color: #fff;
    div:last-child {
      padding: 0;
      margin: 0;
      color: #8b8b8b;
      font-size: 0.8rem;
    }
  }
  .time {
    color: #8b8b8b;
    font-size: 0.8rem;
  }
}
.contact-item:hover{
    background-color: #222;
}
</style>
