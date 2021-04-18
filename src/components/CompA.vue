<template>
    <h3>A分店來客數</h3>
    <h5>{{ customer }}</h5>
    <button @click="addCount">客人來了</button>
</template>

<script>
import useAddCount from "@/use/useAddCount";
export default {
    setup() {
        const { customer, addCount } = useAddCount();
        return {
            customer,
            addCount,
        };
    },
};
</script>

<style lang="scss" scoped></style>
