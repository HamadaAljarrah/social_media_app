import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'
import { useUser } from '../../hooks/useUser'

export const Protected = ({ children }: { children: ReactNode }): any => {
    const { isPending, isError } = useUser();
    const router = useRouter();
    if (isPending) return <h1>Loading...</h1>
    if (isError) {
        router.push('/auth/login')
        return <h1>Loading...</h1>
    }
    return children

}
