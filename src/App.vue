<template>
    <nav>
        <router-link v-for="item in menu" :key="item" :to="`/${item}`">
            {{ item }}
        </router-link>
    </nav>
    <router-view />
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
    setup() {
        const menu = reactive([
            "LifeCycle",
            "RefDemo",
            "ReactiveDemo",
            "ToRefsDemo",
            "RefCompare",
            "PropsDemo",
            "EmitDemo",
            "ComputedDemo",
            "WatchDemo",
            "StoreDemo",
            "SlotDemo",
            "Teleport",
            "Suspense",
            "CssInjection",
        ]);
        return { menu };
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    background: #81b39c;
    display: flex;
    margin-bottom: 50px;
    flex-wrap: wrap;
    a {
        font-weight: bold;
        display: inline-block;
        color: #2c3e50;
        margin: 5px 10px;
        &.router-link-exact-active {
            color: #eee;
        }
    }
}
</style>
