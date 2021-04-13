<script setup>
import { ref } from "vue";
const bgColor = ref("#000");

const radomColor = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const setBg = () => {
    let temp = "#";
    for (let i = 0; i < 3; i++) {
        temp += radomColor(0, 9);
    }
    bgColor.value = temp;
    console.log("bgColor", bgColor);
};

setBg();

// export default {
//     setup() {

//     },
// };
</script>

<template>
    <button @click="setBg">random bg</button>
    <div class="test"></div>
</template>

<style>
.test {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: v-bind(bgColor);
}
body {
    background-color: v-bind(bgColor);
}
</style>
