import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
	getPatient,
} from './reducers/patient';
import { Patient } from './types';
import PatientCallsComponent from './components/patient-calls';
import PatientDetailComponent from './components/patient-detail';
import PatientMessagesComponent from './components/patient-messages';
import PatientHeartRateComponent from './components/patient-heart-rate';
import PatientGPSComponent from './components/patient-gps';
import PatientPanelComponent from './components/patient-panel';

interface IPatientProps {
	getPatient: Function;
	patient: Patient;
	isLoading: boolean;
	isFail: boolean;
	match: any;
}

interface IPatientState {
	id: any;
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
    
    a {
        box-sizing: border-box;
        padding: 10px 20px;
        cursor: pointer;
        background: darkcyan;
        margin: 0 5px 0 0;
        color: black;

        &:hover {
            background: #e6604c;
        }

        &.active {
            background: white;
        }
    }
`;

const TabBody = styled.div`
	flex: 1;
	box-sizing: 20px;
	padding: 20px;
	overflow: auto;
`;

class PatientComponent extends React.Component<IPatientProps, IPatientState> {
	constructor(props: IPatientProps) {
        super(props);

		this.state = { id: null } as IPatientState;
    }

	componentDidMount() {
		const { id } = this.props.match.params;
        this.props.getPatient(id);
        this.setState({ id });
	}

	render() {
		return (
			<Container>
				<PatientPanelComponent data={this.props.patient}></PatientPanelComponent>
				<Details>
					<Tabs>
                        <NavLink to={`/patients/${this.state.id}/detail`} activeClassName='active'>Detail</NavLink>
                        <NavLink to={`/patients/${this.state.id}/calls`} activeClassName='active'>Calls</NavLink>
                        <NavLink to={`/patients/${this.state.id}/messages`} activeClassName='active'>Messages</NavLink>
                        <NavLink to={`/patients/${this.state.id}/gps`} activeClassName='active'>GPS</NavLink>
					</Tabs>
					<TabBody>
                        <Route exact path="/patients/:id/detail" component={PatientDetailComponent} />
                        <Route exact path="/patients/:id/calls" component={PatientCallsComponent} />
                        <Route exact path="/patients/:id/messages" component={PatientMessagesComponent} />
                        <Route exact path="/patients/:id/gps" component={PatientGPSComponent} />
					</TabBody>
				</Details>
			</Container>
		);
	};
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