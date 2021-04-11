<template>
    <button @click="showToast" class="btn">打开 toast</button>
    <!-- to 属性就是目标位置 -->
    <teleport to="#teleport-target">
        <div v-if="visible" class="toast-wrap">
            <div class="toast-msg">我是一个 Toast</div>
        </div>
    </teleport>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        // toast 的封装
        const visible = ref(false);
        let timer;
        const showToast = () => {
            visible.value = true;
            clearTimeout(timer);
            timer = setTimeout(() => {
                visible.value = false;
            }, 2000);
        };
        return {
            visible,
            showToast,
        };
    },
};
</script>

<style lang="scss">
.toast-wrap {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .toast-msg {
        width: 200px;
        height: 50px;
        background: #333;
        color: #eee;
        font-size: 20px;
    }
}
</style>
