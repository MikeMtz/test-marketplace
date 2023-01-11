import {Product} from "./interfaces/product";

/**
 * General AppSate Interface to Store (NgRx)
 */
export interface AppState{
    basket: Product[],
    bought: Product[],
    balance: number
}
