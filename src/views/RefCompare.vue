<template>
    <div>
        <h1>obj(ref)</h1>
        <h5>{{ obj.count }}</h5>
        <hr />
        <h1>obj2(reactive)</h1>
        <h5>{{ obj2.count }}</h5>
        <button @click="handleClick">click me</button>
    </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
export default {
    setup() {
        const obj = ref({ count: 0 }); //無法深層監控
        const obj2 = reactive({ count: 0 });

        const handleClick = () => {
            obj.value.count++;
            obj2.count++;
        };

        watch(obj, (val) => {
            console.log("refs:", val);
        });

        watch(obj2, (val) => {
            console.log("reactive:", val);
        });

        return { obj, obj2, handleClick };
    },
};
</script>

<style lang="scss" scoped></style>
