<template>
    <ul>
        <li v-for="item in maskInfo" :key="item.properties.id">
            <p>{{ item.properties.name }}</p>
            <span>{{ item.properties.address }}</span>
        </li>
    </ul>
</template>

<script>
import { reactive } from "vue";
export default {
    async setup() {
        let maskInfo = reactive([]);
        const response = await fetch(
            "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json"
        );
        const info = await response.json();
        maskInfo = info.features.splice(0, 30);
        console.log("info", info);
        return { maskInfo };
    },
};
</script>

<style></style>
