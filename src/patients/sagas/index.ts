import { put, takeEvery } from 'redux-saga/effects';
import {
    GET_PATIENTS,
    GET_PATIENTS_SUCCESS,
    GET_PATIENTS_FAIL,
} from '../reducers/patients';
import {
    getPatientsAsync
} from '../services/patients-service';

function* getPatients() {
    try {
        const patients = yield getPatientsAsync();
        yield put({ type: GET_PATIENTS_SUCCESS, payload: patients });
    } catch (error) {
        yield put({ type: GET_PATIENTS_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(GET_PATIENTS, getPatients);
}
