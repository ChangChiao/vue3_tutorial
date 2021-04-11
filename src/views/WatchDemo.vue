<template>
    <h1>watch</h1>
    <h2>count1 -- 每1秒+1</h2>
    <h5>{{ count1 }}</h5>
    <h2>count2 -- 每2秒+1</h2>
    <h5>{{ count2 }}</h5>
    <h2>count3 -- 每3秒+1</h2>
    <h5>{{ count3 }}</h5>
    <h2>state count -- 每5秒+1</h2>
    <h5>{{ state.count }}</h5>
</template>

<script>
import { ref, watch, watchEffect, onMounted, reactive } from "vue";
export default {
    setup() {
        const count1 = ref(0);
        const count2 = ref(0);
        const count3 = ref(0);

        const state = reactive({ count: 0 });

        watch(count1, (newVal) => {
            console.log("count change!", newVal);
        });

        watch(count2, (newVal) => {
            console.log("count2 change!", newVal);
        });

        watch([count2, count3], (newVal2, newVal3) => {
            console.log("尾數為6!", newVal2, newVal3);
        });

        // watch(count3, (count, prevCount) => {
        //     console.log("count3 change!", count);
        // });

        // ---------------------------------------------------------
        // watch(
        //     () => state.count,

        //     (count, prevCount) => {
        //         console.log("=====state count change!", count, prevCount);
        //     }
        // );

        //初始就會執行一遍
        watchEffect(() => {
            console.log("count1 change!", count1.value);
            console.log("count2 change!", count2.value);
        });

        const stop = watchEffect(() => {
            console.log("count1 change!", count1.value);
            if (count1.value >= 10) stop();
        });

        onMounted(() => {
            setInterval(() => {
                const d = new Date();
                const second = d.getSeconds();
                count1.value++;
                if (second % 2 === 0) {
                    count2.value++;
                }
                if (second % 3 === 0) {
                    count3.value++;
                }
                if (second % 5 === 0) {
                    state.count++;
                }
            }, 1000);
        });

        return { count1, count2, count3, state };
    },
};
</script>

<style></style>
