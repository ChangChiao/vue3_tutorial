<template>
    <div>
        <img
            src="https://images.unsplash.com/photo-1446126102442-f6b2b73257fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt=""
        />
        <!-- <h1>{{ state.name }}</h1>
        <h5>{{ state.price }}</h5>
        <h6>{{ state.discount }}%</h6> -->

        <h1>{{ name }}</h1>
        <h5>{{ price }}</h5>
        <h6>{{ discount }}%</h6>
    </div>
    <button @click="addPrice">漲價了</button>
    <button @click="setSale">打折了</button>
</template>

<script>
// import { reactive, toRef } from "vue";
import { reactive, toRef, toRefs } from "vue";
export default {
    setup() {
        const state = reactive({
            name: "milk",
            price: 100,
            discount: 20,
        });

        const sale = toRef(state, "discount");
        console.log("sale", sale);

        const setSale = () => {
            sale.value += 5;
            console.log("state---discount", state.discount);
        };

        const addPrice = () => {
            state.price += 10;
            console.log("now price", state.price);
        };

        // return { state, addPrice, setSale, sale };
        // return { ...state, addPrice, setSale, sale };
        return { ...toRefs(state), addPrice, setSale, sale };
    },
};
</script>

<style scoped>
img {
    width: 300px;
}
</style>
