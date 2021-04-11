import { createRouter, createWebHashHistory } from "vue-router";
import Basic from "../views/Basic.vue";
import CssInjection from "../views/CssInjection.vue";
import EmitDemo from "../views/EmitDemo.vue";
import LifeCycle from "../views/LifeCycle.vue";
import SlotDemo from "../views/SlotDemo.vue";
import WatchDemo from "../views/WatchDemo.vue";
import Suspense from "../views/Suspense.vue";
import ToRefsDemo from "../views/ToRefsDemo.vue";
import StoreDemo from "../views/StoreDemo.vue";
import Teleport from "../views/Teleport.vue";
import PropsDemo from "../views/PropsDemo.vue";
import ComputedDemo from "../views/ComputedDemo.vue";
import RefDemo from "../views/RefDemo.vue";
import ReactiveDemo from "../views/ReactiveDemo";
import RefCompare from "../views/RefCompare.vue";
const routes = [
    {
        path: "/",
        name: "Basic",
        component: Basic,
    },
    {
        path: "/CssInjection",
        name: "CssInjection",
        component: CssInjection,
    },
    {
        path: "/EmitDemo",
        name: "EmitDemo",
        component: EmitDemo,
    },
    {
        path: "/LifeCycle",
        name: "LifeCycle",
        component: LifeCycle,
    },
    {
        path: "/PropsDemo",
        name: "PropsDemo",
        component: PropsDemo,
    },
    {
        path: "/SlotDemo",
        name: "SlotDemo",
        component: SlotDemo,
    },
    {
        path: "/WatchDemo",
        name: "WatchDemo",
        component: WatchDemo,
    },
    {
        path: "/ToRefsDemo",
        name: "ToRefsDemo",
        component: ToRefsDemo,
    },
    {
        path: "/Suspense",
        name: "Suspense",
        component: Suspense,
    },
    {
        path: "/StoreDemo",
        name: "StoreDemo",
        component: StoreDemo,
    },
    {
        path: "/Teleport",
        name: "Teleport",
        component: Teleport,
    },
    {
        path: "/ComputedDemo",
        name: "ComputedDemo",
        component: ComputedDemo,
    },
    {
        path: "/RefDemo",
        name: "RefDemo",
        component: RefDemo,
    },
    {
        path: "/ReactiveDemo",
        name: "ReactiveDemo",
        component: ReactiveDemo,
    },
    {
        path: "/RefCompare",
        name: "RefCompare",
        component: RefCompare,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
