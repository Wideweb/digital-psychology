import * as React from 'react';
import { connect } from 'react-redux';
import {
    getPatient,
} from './reducers/patient';
import { Container } from './atoms';
import { Patient } from './types';

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
        return (<Container>{this._renderPatient()}</Container>)
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
            <div className="row">
                <label>Name</label>
                <span>{ this.props.patient.name }</span>
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