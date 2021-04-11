<template>
    <h1>Reactive</h1>
    <ul>
        <li v-for="item in arr" :key="item">
            {{ item }}
        </li>
    </ul>
    <button @click="updateArr">replace</button>
</template>
<script>
import { reactive } from "@vue/reactivity";
export default {
    setup() {
        const arr = reactive(["nike", "puma", "adidas"]);
        const updateArr = () => {
            arr[0] = "new balance";
        };

        console.log("reactive----", arr);

        return { arr, updateArr };
    },
};
</script>

<style scoped></style>
