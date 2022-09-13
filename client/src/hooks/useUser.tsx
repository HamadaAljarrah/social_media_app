import { useEffect, useState } from "react";
import { checkIfLoggedin, getWithExpiry } from "../services/auth";
import { IUser } from "../types/user";


export const useUser = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<any>(null);
    const [user, setUser] = useState<IUser | undefined>(undefined);


    useEffect(() => {
        const checkAuthState = async () => {
            setIsPending(true);
            const result = await checkIfLoggedin(getWithExpiry('token'))
            if (result.success) {
                setIsPending(false);
                setIsError(null)
                setUser(result.data)

            }
            else {
                setIsPending(false);
                setIsError(result.message)
                setUser(undefined)
            }
        }
        checkAuthState()
    }, [])

    return { isPending, isError, user }
}