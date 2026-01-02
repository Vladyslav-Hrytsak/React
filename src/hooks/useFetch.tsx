import {useEffect, useState} from "react";

export const useFetch = () => {// створено та експортовано власний кастомний феч хук в створені і роботі якого використовуються існуючі хуки useState та useEffect
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        return () => {
            console.log('unsubscribe');
        }

    }, []);

    return users;
}