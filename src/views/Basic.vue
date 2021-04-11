<template>
    <h1>count</h1>
    <h2>{{ count }}</h2>
    <button @click="handleClick">add count</button>
    <hr />
    <h1>My name is {{ memberInfo.name }}</h1>
    <h2>{{ memberInfo.age }}</h2>
    <button @click="addAge">add age</button>
    <hr />
    <input ref="textInput" type="text" value="123" />
</template>

<script>
import { onMounted, reactive, ref } from "vue";
export default {
    setup() {
        const textInput = ref(null); //dom
        const count = ref(0);
        const memberInfo = reactive({
            name: "APPLE",
            age: 20,
            gender: "female",
        }); //object,array

        const handleClick = () => {
            count.value++;
        };

        const addAge = () => {
            memberInfo.age++;
        };

        onMounted(() => {
            console.log("textInput", textInput);
            setTimeout(() => {
                textInput.value.value = "";
            }, 3000);
        });

        return {
            count,
            memberInfo,
            textInput,
            handleClick,
            addAge,
        };
    },
};
</script>

<style></style>
