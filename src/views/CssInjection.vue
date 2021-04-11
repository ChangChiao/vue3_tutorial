<template>
    <button @click="setBg">random bg</button>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const bgColor = ref("#000");
        const setBg = () => {
            let temp = "#";
            for (let i = 0; i < 3; i++) {
                temp += radomColor(0, 9);
            }
            bgColor.value = temp;
            console.log("bgColor", bgColor.value, temp);
        };
        const radomColor = (max, min) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        return { setBg, bgColor };
    },
};
</script>

<style lang="scss">
body {
    background-color: v-bind(bgColor);
}
</style>
