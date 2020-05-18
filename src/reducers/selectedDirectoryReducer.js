import {DIRECTORY_SELECTED, DELETE_DIRECTORY, CREATE_DIRECTORIES} from "../actions/types";

export const selectedDirectoryReducer = (selectedDirectory = {}, action) => {
    if (action.type === DIRECTORY_SELECTED) {
        return action.payload;
    }
    if (action.type === DELETE_DIRECTORY) {
        return {};
    }
    if (action.type === CREATE_DIRECTORIES) {
        return {};
    }

    return selectedDirectory;
};