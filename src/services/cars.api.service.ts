import axios from "axios";
import type {ICar} from "../models/ICar.ts";

const axiosInstence = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {}
})

export const getAllCars = async ():Promise<ICar[]> => {
    const {data} = await axiosInstence.get<ICar[]>('/cars')
    return data
}