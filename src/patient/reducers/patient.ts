import { Reducer } from 'redux';
import { PatientState, Patient } from '../types';

export const GET_PATIENT = 'renter/patient/LOAD';
export const GET_PATIENT_SUCCESS = 'renter/patient/LOAD_SUCCESS';
export const GET_PATIENT_FAIL = 'renter/patient/LOAD_FAIL';

export const initState: PatientState = {
    isLoading: false,
    isFail: false,
    error: null,
    data: {} as Patient,
}

const reducer: Reducer<PatientState> = (state = initState, action) => {
    switch (action.type) {
        case GET_PATIENT:
            return { ...state, isLoading: true };
        case GET_PATIENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFail: false,
                data: action.payload,
            };
        case GET_PATIENT_FAIL:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                error: JSON.stringify(action.payload),
                data: null,
            };
        default:
            return state;
    }
}

export const getPatient = () => async dispatch => {
    dispatch({ type: GET_PATIENT });
}

export default reducer;