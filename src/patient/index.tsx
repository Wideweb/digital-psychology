import * as React from 'react';
import { connect } from 'react-redux';
import {
    getPatient,
} from './reducers/patient';
import { Patient } from './types';
import PatientCallsComponent from './components/patient-calls';
import PatientMessagesComponent from './components/patient-messages';

interface IPatientsProps {
    getPatient: Function;
    patient: Patient;
    isLoading: boolean;
    isFail: boolean;
    match: any;
}

class PatientComponent extends React.Component<IPatientsProps, {}> {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPatient(id);
    }

    render() {
        return (<div>{this._renderPatient()}</div>)
    }

    _renderPatient() {
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
            <div className="container">
                <div className="row">
                    <h1>{ this.props.patient.name }</h1>
                </div>
                <div className="row">
                    <h2>Calls</h2>
                    <PatientCallsComponent data={this.props.patient.calls}></PatientCallsComponent>
                </div>
                <div className="row">
                    <h2>Messages</h2>
                    <PatientMessagesComponent data={this.props.patient.calls}></PatientMessagesComponent>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        patient: state.patient.data,
        isLoading: state.patients.isLoading,
        isFail: state.patients.isFail,
        error: state.patients.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPatient: () => dispatch(getPatient()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientComponent);