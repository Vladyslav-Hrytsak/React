import axios from "axios";
import type {IUserWithToken} from "../models/IUserWithToken.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IBaseResponceModel} from "../models/IBaseResponceModel.ts";
import {retriveLocalStoradge} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";


type LoginData = {
    username: string,
    password: string
}


const axiosInstance = axios.create({ //створюю обʼєкт аксіос та прописаю базову урлу
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})



axiosInstance.interceptors.request.use((request) =>{
//створюю інтерсептор для гетових запитів для того щоб передавати токени авторизації для отримання відповіді з сервера
    if(request.method?.toUpperCase() === "GET"){ //перевірка методу гет або пост
        request.headers.authorization = "Bearer "+ retriveLocalStoradge<IUserWithToken>('user').accessToken;
        //передання хедеру з токеном авторизації
    }

    return request
})


export const login = async ({username, password}:LoginData):Promise<IUserWithToken> => {
    const {data:userWithTokens} = await axiosInstance.post<IUserWithToken>("/login", {username, password});
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
    return userWithTokens
    //функція логінації в яку передається обʼєкт з данними введеними в форму
    //функція робить постовий запит та отримає з арі токени та зберігає їх в локал сторедж
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
    const {data:{products}} =  await axiosInstance.get<IBaseResponceModel>("/products");
    return products;
    //функція яка робить гетовий запит на арі для отримання продуктів авторизованого користувача
}

export const refresh = async () => {
    const iUserWithToken =  retriveLocalStoradge<IUserWithToken>("user")
    const {data:{accessToken, refreshToken}} =      await axiosInstance.post<ITokenPair>("/refresh",  iUserWithToken.refreshToken);
    //функція рефреш  створює костантку в яку записує  токени з локалсторедж
    //функція робить постовий запит  на урлу рефреш в параметрах передає існуючий рефреш токен та отримує новий рефреш токен та новий ацес токен
    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    //перевизначаються існуючі токени та заисуються в локалсторедж
    localStorage.setItem("user", JSON.stringify(iUserWithToken));

}