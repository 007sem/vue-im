<script  setup>
import { ref } from 'vue'

const content = ref('')

</script>

<template>
    <div class='input-box'>
        <textarea  v-model="content"></textarea>
        <div class="btn-sub">
            send
        </div>
    </div>
</template>

<style scoped lang='less'>
.input-box{
    min-height: 10rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    textarea{
        width: 100%;
        flex: 1;
        resize: none;
        border: none;
        outline: none;
        font-size: 1.1rem;
    }
}

.btn-sub{
    padding: 4px 1rem;
    background-color: #181818;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all .2s ease-in-out;
}
.btn-sub:hover{
    background-color: #333;
}
</style>