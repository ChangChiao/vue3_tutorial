<template>
    <input v-model="amount" type="number" />台幣
    <h6>可以換</h6>
    <h3>{{ toJPY }}日幣</h3>
    <hr />
    <h3>plusOne</h3>
    <p>{{ plusOne }}</p>
</template>

<script>
import { computed, ref, onMounted } from "vue";
export default {
    setup() {
        const amount = ref(0);
        const toJPY = computed(() => Math.floor(amount.value * 3.84));

        const count = ref(1);
        const plusOne = computed({
            get: () => count.value,
            set: (val) => {
                count.value = val;
            },
        });

        onMounted(() => {
            setTimeout(() => {
                plusOne.value = 2;
            }, 3000);
        });
        return { amount, toJPY, plusOne };
    },
};
</script>

<style></style>
