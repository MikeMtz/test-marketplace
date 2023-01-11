import {createAction, props} from "@ngrx/store";

export const setBalance = createAction('[BALANCE] Set balance', props<{ balance: number }>());
