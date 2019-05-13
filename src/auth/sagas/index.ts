import { put, takeEvery } from 'redux-saga/effects';
import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
} from '../reducers/auth';
import {
    signInAsync,
    getUserInfoAsync
} from '../services/auth-service';

function* signIn() {
    try {
        const accessToken = yield signInAsync();
        const user = yield getUserInfoAsync(accessToken);
        yield put({ type: SIGN_IN_SUCCESS, payload: { user, accessToken } });
    } catch (error) {
        yield put({ type: SIGN_IN_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(SIGN_IN, signIn);
}
