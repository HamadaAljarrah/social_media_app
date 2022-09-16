import { useRouter } from "next/router";

interface Refresh {
    navigate: (path: string) => Promise<boolean>;
    refreshSSR: () => Promise<boolean>;
}

export function useRefresher(): Refresh {
    const router = useRouter();
    const navigate = (path: string) => router.push(path);
    const refreshSSR = () => router.replace(router.asPath);
    return { navigate, refreshSSR };
}


