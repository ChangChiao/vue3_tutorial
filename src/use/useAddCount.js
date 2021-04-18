import { ref } from "vue";

export default function useAddCount() {
    const customer = ref(0);
    const addCount = () => {
        customer.value++;
    };
    return {
        customer,
        addCount,
    };
}
