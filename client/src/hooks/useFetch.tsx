import { useEffect, useState } from "react"
import sendRequset from "../services/auth";


export const useFetch = (url: string, token?: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<any>(null);
    const [data, setData] = useState<any>(null);

    useEffect(() => {

        sendRequset.GET(url, token)
            .then((response) => {
                setData(response.data)
                setIsLoading(false)
                setIsError(null)
            })
            .catch((err) => {
                setData(null)
                setIsLoading(false)
                setIsError(err)
            })

    }, [])

    return { isLoading, isError, data }
}