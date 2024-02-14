<script  setup>
import { ref } from 'vue'
import emoji from "@/assets/icon/emoji.svg"


</script>

<template>
    <div class='tools'>
        <div>
            <i class="iconfont icon-emoji"></i>
        </div>
        <div>
            <i class="iconfont icon-phone"></i>
            <i class="iconfont icon-call"></i>
        </div>
    </div>
</template>

<style scoped lang='less'>
.tools{
    width: 100%;
    padding: .4rem .4rem 0;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        i{
            font-size: 1.6rem;
            cursor: pointer;
        }
    }
}
.emoji{
    cursor: pointer;
}


</style>