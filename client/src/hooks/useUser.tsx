import { useEffect, useState } from "react"
import { requsetCurrentUser } from "../services/auth";
import Cookie from "../services/cookie"


export const useUser = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<any>(null);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {

        requsetCurrentUser(Cookie.get('token'))
            .then((response) => {
                setUser(response.data)
                setIsLoading(false)
                setIsError(null)
            })
            .catch((err) => {
                setUser(null)
                setIsLoading(false)
                setIsError(err)
            })

    }, [])

    return { isLoading, isError, user }
}