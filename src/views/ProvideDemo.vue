<template>
    <ProvideFather />
</template>

<script>
import ProvideFather from "@/components/ProvideFather";
import { provide } from "vue";
export default {
    components: {
        ProvideFather,
    },
    setup() {
        provide("id", 9453);
    },
};
</script>

<style></style>
