<template>
    <h1>我是父元件</h1>
    <h2>{{ name }}</h2>
    <hr />
    <EmitDemoChild @handleSend="handleSend" />
</template>

<script>
import EmitDemoChild from "@/components/EmitDemoChild";
import { ref } from "vue";
export default {
    components: {
        EmitDemoChild,
    },
    setup() {
        const name = ref("no name");
        const handleSend = (userName) => {
            name.value = userName;
        };

        return { handleSend, name };
    },
};
</script>

<style></style>
