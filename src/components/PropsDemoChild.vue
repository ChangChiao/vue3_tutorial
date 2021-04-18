<template>
    <h2>{{ count }}</h2>
    <button @click="handleClick">add count</button>
</template>

<script>
export default {
    // props:['count', 'handleClick'],
    props: {
        count: {
            type: Number,
            default: 0,
        },
        handleClick: Function,
    },
    setup(props) {
        console.log("props", props);
    },
};
</script>

<style></style>
