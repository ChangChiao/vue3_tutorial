<template>
    <h2>{{ time }}</h2>
    <button @click="getNowTime">getNowTime</button>
</template>

<script>
import {
    onBeforeMount,
    onBeforeUpdate,
    onMounted,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref,
} from "vue";
export default {
    setup() {
        //setup階段在beforeCreate之前
        const time = ref("");

        const getTime = () => {
            const timeString = new Date().toLocaleTimeString("en-US");
            time.value = timeString;
        };

        const getNowTime = () => {
            getTime();
        };

        console.log("setup");

        onBeforeMount(() => {
            console.log("onBeforeMount");
        });

        onMounted(() => {
            getTime();
            console.log("onMounted");
        });

        onBeforeUpdate(() => {
            console.log("onBeforeUpdate");
        });

        onUpdated(() => {
            console.log("onUpdated");
        });

        onBeforeUnmount(() => {
            console.log("onBeforeUnmount");
        });

        onUnmounted(() => {
            console.log("onUnmounted");
        });

        return { time, getNowTime };
    },
};
</script>

<style></style>
