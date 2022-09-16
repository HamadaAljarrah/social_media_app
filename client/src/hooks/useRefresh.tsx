import { useRouter } from "next/router";

interface Refresh {
    navigate: () => Promise<boolean>;
    refreshSSR: () => Promise<boolean>;
}

export function useRefresher(path: string): Refresh {
    const router = useRouter();
    const navigate = () => router.push(path);
    const refreshSSR = () => router.replace(router.asPath);
    return { navigate, refreshSSR };
}


