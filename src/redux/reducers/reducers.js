import { SAVE_ITEMS} from '../actionTypes'

const initialState = {};

export default (state=initialState, action) => {
    switch(action.type) {

        case SAVE_ITEMS: {
            const { products } = action.payload
            return {
                ...state,
                products: products
            }
        }

        default: {
            return state;
        }
    }
};