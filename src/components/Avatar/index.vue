<script  setup>
import { ref } from 'vue'

const props = defineProps(["src", "size", "alt"])

const size = ref(props.size || "3rem")
const alt = ref(props.alt || "")

</script>

<template>
    <div class='avatar' :style="{
        width: size,
        height: size,
    }">
        <img :src="props.src" :alt="props.alt">
    </div>
</template>

<style scoped lang='less'>
.avatar {
    border-radius: 4px;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        display: block;

    }
}
</style>