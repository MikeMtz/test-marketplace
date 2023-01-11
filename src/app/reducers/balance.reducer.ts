import { createReducer, on } from '@ngrx/store';
import * as actions from '../actions/balance.actions';

export const initialBalance: Number = 3000; // Initial amount on balance

/**
 * Balance reducer functions
 */
export const balanceReducer = createReducer(
    initialBalance,
    on(actions.setBalance, (state, { balance }) => balance)
);
