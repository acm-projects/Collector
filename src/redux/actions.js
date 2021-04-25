import {
    SAVE_ITEMS,
    FILTER_NAME_ADD,
    FILTER_NAME_DEL
} from './actionTypes'

export const saveItems = (products) => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch({ type: SAVE_ITEMS, payload: { products } });
    }
};

export const filterNameAdd = (search) => ({
    type: FILTER_NAME_ADD,
    payload: {
        search,
    },
})

export const filterNameDel = (search) => ({
    type: FILTER_NAME_DEL,
    payload: {
      search,
    },
  })