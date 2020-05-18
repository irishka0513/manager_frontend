import {CREATE_DIRECTORIES, DELETE_DIRECTORY, DIRECTORY_SELECTED, NOTE_SELECTED} from "../actions/types";

export const selectedNoteReducer = (selectedNote = {}, action) => {
    if (action.type === NOTE_SELECTED) {
        return action.payload;
    }
    if (action.type === CREATE_DIRECTORIES) {
        return {};
    }
    if (action.type === DELETE_DIRECTORY) {
        return {};
    }
    if (action.type === DIRECTORY_SELECTED) {
        return {};
    }
    return selectedNote;
};