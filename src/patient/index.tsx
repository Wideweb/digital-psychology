import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
    getPatient,
} from './reducers/patient';
import { Patient } from './types';
import PatientCallsComponent from './components/patient-calls';
import PatientMessagesComponent from './components/patient-messages';
import PatientPanelComponent from './components/patient-panel';

interface IPatientsProps {
    getPatient: Function;
    patient: Patient;
    isLoading: boolean;
    isFail: boolean;
    match: any;
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
	flex-direction: row;
	overflow: hidden;
`;

const Details = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	overflow: auto;
`;

class PatientComponent extends React.Component<IPatientsProps, {}> {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPatient(id);
    }

    render() {
        return (
			<Container>
				<PatientPanelComponent data={this.props.patient}></PatientPanelComponent>
				<Details>
					<PatientCallsComponent data={this.props.patient.calls}></PatientCallsComponent>
					<PatientMessagesComponent data={this.props.patient.messages}></PatientMessagesComponent>
				</Details>
			</Container>
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