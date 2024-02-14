<script setup>
import { ref } from "vue";
import MessageItem from "./MessageItem.vue";



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
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.0"
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
    {
        "id": "9x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.9"
    },
    {
        "id": "10x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.10"
    },
    {
        "id": "11x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.11"
    },
    {
        "id": "12x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.12"
    },
    {
        "id": "13x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.13"
    },
    {
        "id": "14x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.14"
    },
    {
        "id": "15x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.15"
    },
    {
        "id": "16x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.16"
    },
    {
        "id": "17x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.17"
    },
    {
        "id": "18x",
        "is_other_person_send": true,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.18"
    },
    {
        "id": "19x",
        "is_other_person_send": false,
        "content_type": "text",
        "content": "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab at adipisci, laboriosam eius magni commodi, ipsam assumenda vel mollitia vitae enim! Architecto eaque optio maxime illo ullam expedita tenetur laboriosam.19"
    }
],
};
</script>

<template>
  <div class="message-list">
    <MessageItem
      v-for="message in messageData.messages"
      :key="message.id"
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
