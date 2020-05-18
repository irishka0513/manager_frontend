import _ from 'lodash';
import {FETCH_DIRECTORIES, CREATE_DIRECTORIES, FETCH_DIRECTORY, DELETE_DIRECTORY, EDIT_DIRECTORY} from "../actions/types";

export default(state = {}, action) => {
    switch (action.type) {
        case FETCH_DIRECTORIES:
            return { ...state, ..._.mapKeys(action.payload.data, 'id')};
        case FETCH_DIRECTORY:
            return { ...state, [action.payload.data.id]: action.payload.data};
        case CREATE_DIRECTORIES:
            return { ...state, [action.payload.data.id]: action.payload.data};
        case DELETE_DIRECTORY:
            return _.omit(state, action.payload);
        case EDIT_DIRECTORY:
            return { ...state, [action.payload.data.id]: action.payload.data};
        default:
            return state;
    }
};

