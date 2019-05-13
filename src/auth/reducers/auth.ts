import { Reducer } from 'redux';
import { AuthState } from '../types';

export const SIGN_IN = 'renter/auth/sign-in';
export const SIGN_IN_SUCCESS = 'renter/auth/sign-in-success';
export const SIGN_IN_FAIL = 'renter/auth/sign-in-fail';

export const initState: AuthState = {
    isSignedIn: false,
    isLoading: false,
    user: null,
    accessToken: null,
    error: null,
    isReady: false,
}

const reducer: Reducer<AuthState> = (state = initState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLoading: true,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isSignedIn: true,
                isLoading: false,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
                isReady: action.payload.user && action.payload.user.name,
            };
        case SIGN_IN_FAIL:
            return {
                ...state,
                isSignedIn: false,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const signInWith = () => async dispatch => {
    dispatch({ type: SIGN_IN });
}

export default reducer;
