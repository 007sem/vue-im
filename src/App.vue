<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router"

const count = ref(0);
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style scoped lang="less"></style>
