import { put, takeEvery } from 'redux-saga/effects';
import {
    GET_PATIENT,
    GET_PATIENT_SUCCESS,
    GET_PATIENT_FAIL,
} from '../reducers/patient';
import {
    getPatientAsync
} from '../services/patient-service';

function* getPatient(id) {
    try {
        const patient = yield getPatientAsync();
        yield put({ type: GET_PATIENT_SUCCESS, payload: patient });
    } catch (error) {
        yield put({ type: GET_PATIENT_FAIL, payload: error });
    }
}

export default function* watch() {
    yield takeEvery(GET_PATIENT, getPatient);
}
