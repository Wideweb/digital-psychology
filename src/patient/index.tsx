import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
	getPatient,
} from './reducers/patient';
import { Patient } from './types';
import PatientCallsComponent from './components/patient-calls';
import PatientMessagesComponent from './components/patient-messages';
import PatientHeartRateComponent from './components/patient-heart-rate';
import PatientPanelComponent from './components/patient-panel';

interface IPatientProps {
	getPatient: Function;
	patient: Patient;
	isLoading: boolean;
	isFail: boolean;
	match: any;
}

interface IPatientState {
	tab: null;
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
	overflow: hidden;
`;

const Tabs = styled.div`
	display: flex;
	flex-direction: row;
	background: #2f343b;
	box-sizing: border-box;
	padding: 10px 0 0 0;
`;

const Tab = styled.div`
	box-sizing: border-box;
	padding: 10px 20px;
	cursor: pointer;
	background: darkcyan;
	margin: 0 5px 0 0;

	&:hover {
		background: #e6604c;
	}

	&.active {
		background: white;
	}
`;

const TabBody = styled.div`
	flex: 1;
	box-sizing: 20px;
	padding: 20px;
	overflow: auto;
`;

const TABS = {
	CALLS: 'calls',
	MESSAGES: 'messages',
	HEART_RATE: 'heart-rate',
}

class PatientComponent extends React.Component<IPatientProps, IPatientState> {
	constructor(props: IPatientProps) {
        super(props);

		this.state = { tab: TABS.CALLS } as IPatientState;
	}
	
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getPatient(id);
	}

	_selectTab(tab) {
		this.setState({ tab });
	}

	_isActiveTab(tab) {
		return tab === this.state.tab;
	}

	render() {
		return (
			<Container>
				<PatientPanelComponent data={this.props.patient}></PatientPanelComponent>
				<Details>
					<Tabs>
						{this._renderTab(TABS.CALLS, 'Calls')}
						{this._renderTab(TABS.MESSAGES, 'Messages')}
						{this._renderTab(TABS.HEART_RATE, 'Heart Rate')}
					</Tabs>
					<TabBody>
						{this._renderTabBody(this.state.tab)}
					</TabBody>
				</Details>
			</Container>
		);
	}

	_renderTab(key, label){
		return (
			<Tab
				className={(this._isActiveTab(key) ? 'active' : '')}
				onClick={() => this._selectTab(key)}
			>
				{label}
			</Tab>
		);
	}

	_renderTabBody(tab) {
		switch(tab) {
			case TABS.CALLS: 
				return <PatientCallsComponent data={this.props.patient.calls}></PatientCallsComponent>;
			case TABS.MESSAGES: 
				return <PatientMessagesComponent data={this.props.patient.messages}></PatientMessagesComponent>;
			case TABS.HEART_RATE: 
				return <PatientHeartRateComponent data={this.props.patient.heartRate}></PatientHeartRateComponent>;
			default:
				return <React.Fragment></React.Fragment>;
		}
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