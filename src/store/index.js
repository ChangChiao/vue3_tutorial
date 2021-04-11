import { createStore } from "vuex";

export default createStore({
    state: {
        toDoList: [
            {
                title: "Clean kitchen",
                description: "Don't forget the are under the sink!!",
            },
            {
                title: "Call Eric",
                description: "Remind him to do his taxes",
            },
            {
                title: "Water flowers",
                description: "Don't forget the ones in the garden!",
            },
        ],
    },
    mutations: {
        updateToDoList(state, payload) {
            state.toDoList.push(payload);
        },
    },
    actions: {},
    modules: {},
});
