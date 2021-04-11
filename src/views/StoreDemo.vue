<template>
    <ol>
        <li v-for="item in toDoList" :key="item.title">
            <h3>{{ item.title }}</h3>
            <h6>{{ item.description }}</h6>
        </li>
        <button @click="addItem">add item</button>
    </ol>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        // const toDoList = store.state.toDoList;//也可以
        const toDoList = computed(() => store.state.toDoList);
        const addItem = () => {
            store.commit("updateToDoList", {
                title: Date.now(),
                description:
                    "In order to access state and getters, you will want to create",
            });
        };
        return { toDoList, addItem };
    },
};
</script>

<style></style>
