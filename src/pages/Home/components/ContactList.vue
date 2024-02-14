<script setup>
import { ref } from "vue";
import Avatar from "@/components/Avatar/index.vue";

let src =
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/974.jpg";

let list = [
  { src: src, name: "name1", time: "time1" },
  { src: src, name: "name2", time: "time2", active: true },
  { src: src, name: "name11", time: "time1" },
  { src: src, name: "name22", time: "time2" },
  { src: src, name: "name12", time: "time1" },
  { src: src, name: "name21", time: "time2" },
];
</script>

<template>
  <div class="contact-list">
    <div
      class="contact-item"
      :class="item.active ? 'active' : ''"
      v-for="item in list"
      :key="item.name"
    >
      <Avatar :src="src" size="2.4rem" />
      <div class="text">
        <span>{{ item.name }}</span>
        <span>last message</span>
      </div>
      <div class="time">time</div>
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
    span:last-child {
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
