import {SAVE_ITEMS} from './actionTypes'

export const saveItems = (products) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: SAVE_ITEMS, products });
    }
};