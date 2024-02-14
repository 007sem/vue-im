<script setup>
import { ref } from "vue";
import Avatar from "@/components/Avatar/index.vue"

const props = defineProps(["avatar", "username"])


</script>

<template>
  <div class="user-info">
    <Avatar :src="props.avatar" size="3.2rem"  />
    <div class="name">{{ props.username }}</div>
  </div>
</template>

<style scoped lang="less">
.user-info {
  display: flex;
  margin-bottom: 1rem;
  .name{
    margin-left: 1rem;
  }
}
</style>
