import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { useAuth } from '../../context/auth.context'
type Props = {
    children: ReactNode
}

export const Protected = ({ children }: Props) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    if (isAuthenticated) {
        return children
    } else {
        router.push('/auth/login')
    }
}
