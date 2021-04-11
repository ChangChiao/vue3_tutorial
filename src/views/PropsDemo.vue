<template>
    <PropsDemoChild :count="count" :handleClick="handleClick" />
</template>

<script>
import PropsDemoChild from "@/components/PropsDemoChild";
import { ref } from "vue";
export default {
    components: {
        PropsDemoChild,
    },
    setup() {
        const count = ref(0);
        const handleClick = () => {
            count.value++;
        };
        return { count, handleClick };
    },
};
</script>

<style></style>
