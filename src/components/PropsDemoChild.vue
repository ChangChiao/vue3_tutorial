<template>
    <h2>{{ props.count }}</h2>
    <button @click="props.handleClick">add count</button>
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
        return { props };
    },
};
</script>

<style></style>
