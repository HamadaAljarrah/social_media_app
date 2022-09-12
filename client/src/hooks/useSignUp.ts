import { useEffect, useState } from "react"
import { Register } from "../types/user"
import { SERVER_URL } from "../types/variables"


const url = SERVER_URL + 'auth/login'

export const useSingUp = async (data: Register) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<any>(null);
    const [result, setResult] = useState<any>({});

    useEffect(() => {
        const signUp = async ()=>{
            setIsLoading(true);
            setIsError(null);
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((data)=>{
                const result = data.json();
                setIsLoading(false);
                setIsError(null);
                setResult(result);
            }).catch((err)=>{
                setIsLoading(false);
                setIsError(err);
                setResult(null);
            })
        }
        signUp();

    }, [])
    return {isLoading, isError, result};
}