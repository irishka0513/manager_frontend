import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import directoryReducer from './directoryReducer';
import notesReducer from './notesReducer';
import { selectedDirectoryReducer } from './selectedDirectoryReducer';
import { selectedNoteReducer } from './selectedNoteReducer';
import {openedDirectoriesReducer} from "./openedDirectoriesReducer";

export default combineReducers({
        auth: authReducer,
        form: formReducer,
        directories: directoryReducer,
        notes: notesReducer,
    selectedDirectory: selectedDirectoryReducer,
    selectedNote: selectedNoteReducer,
    openedDirectories: openedDirectoriesReducer
});