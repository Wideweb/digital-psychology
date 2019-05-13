import { Reducer } from 'redux';
import { PatientsState } from '../types';

export const GET_PATIENTS = 'renter/patients/LOAD';
export const GET_PATIENTS_SUCCESS = 'renter/patients/LOAD_SUCCESS';
export const GET_PATIENTS_FAIL = 'renter/patients/LOAD_FAIL';

export const initState: PatientsState = {
    isLoading: false,
    isFail: false,
    error: null,
    data: [],
}

const reducer: Reducer<PatientsState> = (state = initState, action) => {
    switch (action.type) {
        case GET_PATIENTS:
            return { ...state, isLoading: true };
        case GET_PATIENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFail: false,
                data: action.payload,
            };
        case GET_PATIENTS_FAIL:
            return {
                ...state,
                isLoading: false,
                isFail: true,
                error: JSON.stringify(action.payload),
            };
        default:
            return state;
    }
}

export const getPatients = () => async dispatch => {
    dispatch({ type: GET_PATIENTS });
}

export default reducer;