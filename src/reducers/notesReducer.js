import _ from 'lodash';
import { FETCH_NOTES, EDIT_NOTE, FETCH_NOTE, DELETE_NOTE, DND_NOTE, CREATE_NOTE } from "../actions/types";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_NOTES:
            return { ...state, ..._.mapKeys(action.payload.data, 'id')};
        case FETCH_NOTE:
            return { ...state, [action.payload.data.id]: action.payload.data};
        case EDIT_NOTE:
            return { ...state, [action.payload.data.id]: action.payload.data};
        case DELETE_NOTE:
            return _.omit(state, action.payload);
        case CREATE_NOTE:
            return { ...state, [action.payload.data.id]: action.payload.data};
        case DND_NOTE:
            return { ...state, ..._.mapKeys(action.payload.data, 'id')};
        default:
            return state;
    }
};