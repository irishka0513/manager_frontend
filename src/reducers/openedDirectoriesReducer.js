import {TOGGLE_DIRECTORY} from "../actions/types";
import _ from 'lodash';

export const openedDirectoriesReducer = (openedDirectories = [], action) => {
    if (action.type === TOGGLE_DIRECTORY) {
        if(_.includes(openedDirectories, action.payload)) {
            return openedDirectories.filter((item) => item !== action.payload)
        } else {
            return _.uniq([...openedDirectories, action.payload]);
        }
    }
    return openedDirectories;
};