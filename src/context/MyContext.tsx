import {createContext} from "react";


type MyContextType = {
    theme: string,
    changeTheme: (theme:string) => void
}

const init: MyContextType = {
    theme:'light',
    changeTheme: (theme:string) => {
        console.log(theme);
    }
};
export const MyContext = createContext<MyContextType>(init)