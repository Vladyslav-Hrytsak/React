import {type FC, memo} from "react";

export const UserComponent: FC<{ foo: () => void, arr: number[], item: { name: string } }> = memo(({arr, item}) => {
    console.log('user'); //компонент мемомізовано задля того щоб компонент повторно не ререндерився під час як ререндериться батьквівський компонент UsersComponent
    console.log(arr);

    return (
        <div>{item.name}</div>
    );
});