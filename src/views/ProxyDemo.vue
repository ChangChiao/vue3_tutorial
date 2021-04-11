<template>
    <div></div>
</template>

<script>
export default {
    setup() {
        const obj = {
            name: "momo",
            age: 18,
        };
        const state = new Proxy(obj, {
            get(obj, key) {
                console.log("get", obj, key);
                return obj[key];
            },
            set(obj, key, value) {
                obj[key] = value;
                console.log(obj, key, value);
            },
        });

        return { state };
    },
};
</script>
