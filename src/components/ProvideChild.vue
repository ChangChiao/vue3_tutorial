<template>
    <h1>Provider</h1>
    <h3>{{ id }}</h3>
</template>

<script>
import { inject } from "vue";
export default {
    setup() {
        const id = inject("id");
        return { id };
    },
};
</script>
