import directories from "../apis/directories";
import notes from '../apis/notes';
import history from "../history";
import {
    SIGN_IN,
    SIGN_OUT,
    EDIT_NOTE,
    FETCH_DIRECTORIES,
    FETCH_DIRECTORY,
    CREATE_DIRECTORIES,
    CREATE_NOTE,
    EDIT_DIRECTORY,
    DELETE_DIRECTORY,
    FETCH_NOTES,
    FETCH_NOTE,
    DELETE_NOTE,
    DND_NOTE,
    DIRECTORY_SELECTED,
    NOTE_SELECTED,
    TOGGLE_DIRECTORY
} from './types';

export const signIn = (resp) => async dispatch => {
    const response = await directories.post('/login', { code: resp.code  });
    dispatch ({
        type: SIGN_IN,
        payload: response.data.data
    });
};

export const signOut = () => async (dispatch, getState) => {
    const { accessToken } = getState().auth;
        await directories.delete('/logout', { headers: { Authorization: `Bearer ${accessToken}` } });
        dispatch ({
            type: SIGN_OUT
        });
};

export const submitForm = (formValues) => {
    return {
        type: 'SUBMIT_FORM',
        payload: formValues
    }
};

export const fetchDirectories = () => async dispatch => {
    const response = await directories.get('/directories');

    dispatch({ type: FETCH_DIRECTORIES, payload: response.data })
};

export const fetchDirectory = (id) => async (dispatch, getState) => {
    const { accessToken } = getState().auth;
    const response = await directories.get(`/directories/${id}`, { headers: { Authorization: `Bearer ${accessToken}`} });

    dispatch({ type: FETCH_DIRECTORY,  payload: response.data});
};


export const deleteDirectory = () => async (dispatch, getState) => {
    const { id } = getState().selectedDirectory;
    const { accessToken } = getState().auth;
    await directories.delete(`/directories/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });

    dispatch({ type: DELETE_DIRECTORY, payload: id});
    history.push('/');
};

export const createDirectory = formValues => async (dispatch, getState) =>{
    const { accessToken } = getState().auth;
    const response = await directories.post('/directories', { data: { attributes: { ...formValues}}}, { headers: { Authorization: `Bearer ${accessToken}` } });

    dispatch({ type: CREATE_DIRECTORIES, payload: response.data });
    history.push('/');
};

export const editDirectory = (id, text) => async (dispatch, getState) => {
    const { accessToken } = getState().auth;
    const response = await directories.patch(`/directories/${id}`, { data: { attributes: { title: text}}}, { headers: { Authorization: `Bearer ${accessToken}` } });

    dispatch({ type: EDIT_DIRECTORY, payload:response.data });
};

export const fetchNotes = () => async dispatch => {
    const response = await notes.get('/notes');

    dispatch ({ type: FETCH_NOTES, payload: response.data });
};

export const fetchNote = () => async (dispatch, getState) => {
    const { id } = getState().selectedNote;
    const response = await notes.get(`/directories/${getState().selectedDirectory.id}/notes/${id}`);

    dispatch({ type: FETCH_NOTE, payload: response.data });

};

export const selectedDirectory = directory => {
    return {
        type: DIRECTORY_SELECTED,
        payload: directory
    };
};

export const selectedNote = note => {
    return {
        type: NOTE_SELECTED,
        payload: note
    };
};

export const editNote = (directoryId, noteId, text) => async (dispatch, getState) => {
    const { accessToken } = getState().auth;
    const response = await directories.patch(`/directories/${directoryId}/notes/${noteId}`, { data: { attributes: { title: text}}}, { headers: { Authorization: `Bearer ${accessToken}` } });

    dispatch({ type: EDIT_NOTE, payload:response.data });
};

export const createNote = (id, formValues) => async (dispatch, getState) =>{
    const { accessToken } = getState().auth;
    const response = await directories.post(`/directories/${id}/notes`, { data: { attributes: { ...formValues}}}, { headers: { Authorization: `Bearer ${accessToken}` } });

    dispatch({ type: CREATE_NOTE, payload: response.data });
    history.push(`/directories/${id}`);
};

export const deleteNote = () => async (dispatch, getState) => {
    const { accessToken } = getState().auth;
    const { id } = getState().selectedDirectory;

    await notes.delete(`/directories/${id}/notes/${getState().selectedNote.id}`, { headers: { Authorization: `Bearer ${accessToken}` } });

    dispatch({ type: DELETE_NOTE, payload: getState().selectedNote.id });
    history.push(`/directories/${id}`);
};

export const dndNote = () => async (dispatch, getState) => {
    const { id } = getState().selectedNote;
    const { position } = getState().selectedNote;
    const { accessToken } = getState().auth;
    const response = await directories.patch(`/directories/${getState().selectedDirectory.id}/notes/${id}`, { data: { attributes: { position: position}}}, { headers: { Authorization: `Bearer ${accessToken}` } });

    dispatch({ type: DND_NOTE, payload: response.data});
};

export const toggleDirectory = directoryId => {
    return {
        type: TOGGLE_DIRECTORY,
        payload: directoryId
    }
};




