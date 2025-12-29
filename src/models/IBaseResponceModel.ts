import type {IProduct} from "./IProduct.ts";

export interface IBaseResponceModel {
    products?: IProduct[]
    total: number
    skip: number
    limit: number
}