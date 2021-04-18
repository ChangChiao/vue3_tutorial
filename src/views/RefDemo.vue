<template>
    <h1>Ref</h1>
    <!-- 在template 不需要用count.value來取值 直接用count即可 -->
    <h3>{{ count }}</h3>
</template>
<script>
import { isRef, ref } from "vue";
export default {
    setup() {
        const count = ref(0); // number,string,boolean...
        //ref(0) ==> reactive({value:18})
        console.log("ref----", count);

        const checkRef = isRef(count);
        console.log("isRef", checkRef);

        setInterval(() => {
            count.value++;
        }, 1000);

        return { count };
    },
};
</script>
