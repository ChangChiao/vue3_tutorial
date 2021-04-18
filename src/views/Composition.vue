<template>
    <h1>小清新網美火鍋店</h1>
    <comp-a />
    <hr />
    <comp-b />
</template>

<script>
import CompA from "@/components/CompA.vue";
import CompB from "@/components/CompB.vue";
export default {
    components: {
        CompA,
        CompB,
    },
};
</script>

<style lang="scss" scoped></style>
