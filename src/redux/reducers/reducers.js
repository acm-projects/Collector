import {
    SAVE_ITEMS,
    FILTER_NAME_ADD,
    FILTER_NAME_DEL
} from '../actionTypes'

const initialState = {};

const filterByNames = (searchQuery, entry) => {
    const name = entry.title.toLowerCase()
    return name.includes(searchQuery)
  }

export default (state=initialState, action) => {
    switch(action.type) {

        case SAVE_ITEMS: {
            const { products } = action.payload
            return {
                ...state,
                products: products,
                tempItems: products,
            }
        }

        case FILTER_NAME_ADD: {
            let { search } = action.payload
            search = search.toLowerCase()
            const products = [...state.products].filter((entry) => filterByNames(search, entry));
            return {
                ...state,
                tempItems: products,
            }
        }

        default: {
            return state;
        }
    }
};