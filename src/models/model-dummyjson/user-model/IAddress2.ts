import type {Coordinates2} from "./ICoordinates2.ts";

export interface Address2 {
    address: string
    city: string
    state: string
    stateCode: string
    postalCode: string
    coordinates: Coordinates2
    country: string
}
