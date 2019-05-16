import * as React from 'react';
import { PatientListItem } from '../types';
import styled from 'styled-components';

interface IPatientListProps {
    data: Array<PatientListItem>;
    onOpenPatient: Function;
}

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
	flex-direction: column;
	overflow: hidden;
`;

const Header = styled.div`
	box-sizing: border-box;
	padding-right: 17px;
`;

const HeaderRow = styled.div`
	width: 100%;
    display: flex;
	flex-direction: row;
	border-bottom: 2px solid gray;
`;

const HeaderCell = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
	padding: 20px;
	
	&:not(:last-child) {
		border-right: 3px solid gray;
	}
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow-y: scroll;
`;

const BodyRow = styled.div`
    width: 100%;
    display: flex;
	flex-direction: row;
	cursor: pointer

    &:hover {
        background: #e6604c;
	}
	
	&:not(:last-child) {
		border-bottom: 1px solid gray;
	}
`;

const BodyCell = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
	padding: 20px;
	&:not(:last-child) {
		border-right: 1px solid gray;
	}
`;

class PatientListComponent extends React.Component<IPatientListProps> {
    _openPatient = (patient) => {
        this.props.onOpenPatient(patient);
    };

    render() {
        const patients = this.props.data;

        return (
            <Container>
				<Header>
                	<HeaderRow>
						<HeaderCell>Number</HeaderCell>
						<HeaderCell>Patient Name</HeaderCell>
						<HeaderCell>Age</HeaderCell>
						<HeaderCell>Sex</HeaderCell>
					</HeaderRow>
				</Header>
				<Body>
					{patients.map((patient) => 
						<BodyRow key={patient.id} onClick={() => this._openPatient(patient)}>
							<BodyCell>{patient.number}</BodyCell>
							<BodyCell>{patient.name}</BodyCell>
							<BodyCell>{patient.age}</BodyCell>
							<BodyCell>{patient.sex}</BodyCell>
						</BodyRow>
					)}
				</Body>
            </Container>
        );
    }
}

export default PatientListComponent;
