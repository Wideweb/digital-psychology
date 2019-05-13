import { all } from 'redux-saga/effects';
import authSaga from '../auth/sagas';
import patientsSaga from '../patients/sagas';
import patientSaga from '../patient/sagas';

export default function* watch() {
    yield all([
        authSaga(),
        patientsSaga(),
        patientSaga(),
    ])
}