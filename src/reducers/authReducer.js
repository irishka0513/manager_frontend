import { SIGN_IN, SIGN_OUT } from '../actions/types';
const INITIAL_STATE = {
    isSignedIn: false,
    accessToken: null
};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case SIGN_IN:
            window.localStorage.setItem('access_token', action.payload.attributes.token);
            window.localStorage.setItem('is_signed_in', true);
            return { ...state, isSignedIn: true, accessToken: action.payload.attributes.token};
        case SIGN_OUT:
            window.localStorage.removeItem('access_token');
            window.localStorage.removeItem('is_signed_in');
            return { ...state, isSignedIn: false, accessToken: null };
        default:
            return { ...state, isSignedIn:  window.localStorage.getItem('is_signed_in') || false, accessToken: window.localStorage.getItem('access_token') };
    }
};