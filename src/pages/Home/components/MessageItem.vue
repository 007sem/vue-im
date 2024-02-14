<script setup>
import { ref } from "vue";
import Avatar from "@/components/Avatar/index.vue";

const props = defineProps(["data", "person", "serial"]);

const avatar = ref(
  "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/962.jpg"
);
const name = ref("user1");
const reverse = ref(true);


if (props.data.is_other_person_send) {
  reverse.value = false;
  avatar.value = props.person.avatar;
  name.value = props.person.name;
}
</script>

<template>
  <div
    class="message-item"
    :style="{
      marginTop: !props.serial ? '2rem' : ' 0',
      flexDirection: reverse ? 'row-reverse' : 'row',
    }"
  >
    <Avatar
      :src="avatar"
      size="2.4rem"
      :style="{ visibility: !props.serial ? 'visible' : 'hidden' }"
    />
    <div class="message-content">
      <div class="name"  v-if="!props.serial" :style="{alignSelf: reverse ?'end':'start'}">{{ name }}</div>
      <div class="content">
        {{ data.content }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.message-item {
  display: flex;
  .message-content {
    flex: 1;
    margin: 0 0.5rem;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: start;

  }
  .name {
    font-size: 0.8rem;
    color: #999;
  }
  .content {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    box-shadow: 0 0 10px #c9c9c9;
    border-radius: 4px;
  }
}
</style>
