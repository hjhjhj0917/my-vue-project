import { ref } from 'vue';

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetchData = async () => { // async는 비동기 처리
        loading.value = true;
        try {
            const response = await fetch(url); // await은 비동기 처리될 때 까지 기다림
            data.value = await response.json();
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    return { data, error, loading, fetchData };
}