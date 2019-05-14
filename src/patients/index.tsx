import * as React from 'react';
import { connect } from 'react-redux';
import {
    getPatients,
} from './reducers/patients';
import PatientListComponent from './components/patient-list';

interface IPatientsProps {
    getPatients: Function;
    patients: Array<any>;
    isLoading: boolean;
    isFail: boolean;
    history: any;
}

class PatientsComponent extends React.Component<IPatientsProps, {}> {
    constructor(props: IPatientsProps) {
        super(props);

        this._openPatient = this._openPatient.bind(this);
    }

    componentDidMount() {
        this.props.getPatients();
    }

    render() {
        return (<div>{this._renderPatients()}</div>)
    }

    _renderPatients() {
        if (this.props.isLoading) {
            return (
                'Loading...'
            )
        }

        if (this.props.isFail) {
            return (
                'Fail'
            )
        }

        return (
            <PatientListComponent data={this.props.patients} onOpenPatient={this._openPatient}/>
        );
    }

    _openPatient(patient) {
        this.props.history.push(`/patients/${patient.id}`);
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        patients: state.patients.data.sort((a, b) => b.createdAt - a.createdAt),
        isLoading: state.patients.isLoading,
        isFail: state.patients.isFail,
        error: state.patients.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPatients: () => dispatch(getPatients()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsComponent);