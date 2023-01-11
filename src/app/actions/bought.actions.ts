import {createAction, props} from "@ngrx/store";
import {Product} from "../interfaces/product";

export const addProduct = createAction('[BOUGHT] Add product to bought list', props<Product>());
