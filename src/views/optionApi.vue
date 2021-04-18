<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            count: 0,
        };
    },
    methods: {
        insertList() {
            this.list.push("text");
        },
        addCount() {
            this.count += 1;
        },
    },
    watch: {
        list(val) {
            console.log(val);
        },
        count(val) {
            console.log(val);
        },
    },
};
</script>

<script>
import { reactive, ref, watch } from "vue";
export default {
    setup() {
        const list = reactive([]);
        const insertList = () => {
            list.push("text");
        };
        watch(list, (val) => {
            console.log(val);
        });

        const count = ref(0);
        const addCount = () => {
            count += 1;
        };

        watch(count, () => {
            console.log(val);
        });

        return {
            list,
            insertList,
            count,
            addCount,
        };
    },
};
</script>
