<template>
    <p>我是子元件</p>
    <input
        type="text"
        v-model="userName"
        @keyup.enter="handleSend"
        placeholder="userName"
    />
</template>

<script>
import { ref } from "vue";
export default {
    // emits: ["handleSend"],
    emits: {
        // 不會被驗證
        click: null,
        handleSend: (userName) => {
            if (userName) {
                return true;
            } else {
                alert("Invalid submit event payload!");
                return false;
            }
        },
    },
    setup(props, { emit }) {
        const userName = ref("");
        const handleSend = () => {
            emit("handleSend", userName.value);
        };

        return { handleSend, userName };
    },
};
</script>

<style></style>
