import { writable } from "svelte/store";

export type Toast = {
    message: string;
    issued: Date;
    id: string;
}

const initializeToastsStore = () => {
    const { subscribe, update } = writable<Toast[]>([]);

    const push = (message: string) => {
        const toast: Toast = {
            id: crypto.randomUUID(),
            issued: new Date(),
            message,
        };

        update((x) => [...x, toast]);
    };

    const pop = (id: string) => {
        update((x) => x.filter(x => x.id != id));
    };

    return { subscribe, push, pop };
};

export const toastsStore = initializeToastsStore();