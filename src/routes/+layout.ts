import type { LoadEvent } from "@sveltejs/kit";

export const trailingSlash = "always";
export const ssr = false;

export const load = ({ url }: LoadEvent) => {
    return { pathname: url.pathname };
};
