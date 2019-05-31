import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
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

	& > * {
		height: 100%;
	}
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
                        <NavLink to={`${this.props.match.url}/detail`} activeClassName='active'>Detail</NavLink>
                        <NavLink to={`${this.props.match.url}/calls`} activeClassName='active'>Calls</NavLink>
                        <NavLink to={`${this.props.match.url}/messages`} activeClassName='active'>Messages</NavLink>
                        <NavLink to={`${this.props.match.url}/gps`} activeClassName='active'>GPS</NavLink>
					</Tabs>
					<TabBody>
						<Switch>
							<Route exact path={`${this.props.match.url}/detail`} component={PatientDetailComponent} />
							<Route exact path={`${this.props.match.url}/calls`} component={PatientCallsComponent} />
							<Route exact path={`${this.props.match.url}/messages`} component={PatientMessagesComponent} />
							<Route exact path={`${this.props.match.url}/gps`} component={PatientGPSComponent} />
							<Redirect to={`${this.props.match.url}/detail`} />
						</Switch>
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