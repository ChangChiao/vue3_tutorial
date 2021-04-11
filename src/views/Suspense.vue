<template>
    <Suspense>
        <template #default>
            <SuspenseChild />
        </template>
        <template #fallback> loading.... </template>
    </Suspense>
</template>

<script>
import SuspenseChild from "@/components/SuspenseChild";
export default {
    components: {
        SuspenseChild,
    },
};
</script>

<style></style>
