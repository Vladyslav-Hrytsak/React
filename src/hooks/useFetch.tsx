import {useEffect, useState} from "react";


export const useFetch = <T,>(url:string, defaultValue:T) =>{
    const [responce, setResponce] = useState<T>(defaultValue)
    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((value) => {
                console.log(value)
                setResponce(value)
            });
    }, [])
    return responce
}