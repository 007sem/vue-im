<script setup>
import { ref } from "vue";
import MessageItem from "./MessageItem.vue";

const props = defineProps(["chat_id"])

console.log("id change",props.chat_id)

let messageData = {
  charts_id: "1",
  other_person: {
    name: "张三",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/972.jpg",
  },
  messages: [
    {
        "id": "0x",
        "time": "2023-04-11T09:45:00.000Z",
        "is_other_person_send": true,
        "content_type": "text",
        "content": " 😀😚😍🤗me illo ullam expedita tenetur laboriosam.0"
    },
    {
        "id": "1x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.1"
    },
    {
        "id": "2x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.2"
    },
    {
        "id": "3x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.3"
    },
    {
        "id": "4x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.4"
    },
    {
        "id": "5x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.5"
    },
    {
        "id": "6x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.6"
    },
    {
        "id": "7x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.7"
    },
    {
        "id": "8x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.8"
    },
],
};
</script>

<template>
  <div class="message-list">
    <MessageItem
      v-for="(message, index) in messageData.messages"
      :key="message.id"
      :serial="index == 0 ? false : message.is_other_person_send == messageData.messages[index-1].is_other_person_send"
      :person="messageData.other_person"
      :data="message"
    />
  </div>
</template>

<style scoped lang="less">
.message-list {
  flex: 1;
  padding: 1rem;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

<!-- 




 -->
