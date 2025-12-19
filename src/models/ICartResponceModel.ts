import type {ICart} from "./ICart.tsx";

export type ICartResponceModel = {
    total: number,
    skip: number,
    limit: number,
    carts: ICart[]
}