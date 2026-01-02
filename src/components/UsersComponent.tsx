
import {UserComponent} from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";


export const UsersComponent = () => {
    console.log('users');
    const users = useFetch(); //виклик кастомного власного хука

    const arr: number[] = useMemo(() => { //за допомогою useMemo створено функцію яка віддає массив (массив закешований
        return [11, 22, 33]; // тобто при кожному ререндері масив залишається сталим та передається в пропси що не призводить до додаткового рірендеру компонента useCallback
    }, []);


    const foo = useCallback(() => { //створена та закешована функція за допомогою useCallback
        console.log('test');               //кожного разу при спрацюванні useEffect, посилання на функцію не змінюється
    }, []);                                       // додатковий рірендер не відбувається в компоненті UserComponent, бо пропси не змінюються


    return (
        <div>users component
            {
                users.map(user =>
                    <UserComponent
                        key={user.id}
                        item={user}
                        foo={foo}
                        arr={arr}
                    />
                )
            }


        </div>
    );
};
