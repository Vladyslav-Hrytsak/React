import type {Geo} from "./GeoModel.ts";

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}