import { useRouter } from "next/router";

interface Refresh {
    refreshSSR: () => Promise<boolean>;
}

export function useRefresher(): Refresh {
    const router = useRouter();
    const refreshSSR = () => router.replace(router.asPath);
    return { refreshSSR };
}


