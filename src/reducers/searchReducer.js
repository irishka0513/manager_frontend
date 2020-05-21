import {SEARCH_NOTE} from "../actions/types";

export const searchReducer = (search = '', action) => {
    if (action.type === SEARCH_NOTE) {
        return action.payload;
    }
    return search;
};