import { ReactNode, useEffect } from 'react'
import { useAuth } from '../../context/auth.context';
import { useRefresher } from '../../hooks/useRefresh';

export const Protected = ({ children }: { children: ReactNode }): any => {
    const { currentUser } = useAuth()
    const { navigate } = useRefresher();

    useEffect(() => {
        if (!currentUser) {
            navigate('/auth/login')
            return
        }
    }, [currentUser])

    return children

}
