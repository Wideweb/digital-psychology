import { combineReducers } from 'redux';
import auth from '../auth/reducers';
import emotions from '../emotions/reducers';
import patients from '../patients/reducers';
import patient from '../patient/reducers';
import { connectRouter } from 'connected-react-router'

export default (history) => combineReducers({
    router: connectRouter(history),
    ...auth,
    ...emotions,
    ...patients,
    ...patient,
});