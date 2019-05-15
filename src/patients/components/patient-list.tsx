import * as React from 'react';
import { PatientListItem } from '../types';
import PatientListItemComponent from './patient-list-item';
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
`;

const HeaderRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const HeaderCell = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
`;

const BodyRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    &:hover {
        background: #e6604c;
    }
`;

const BodyCell = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
`;

class PatientListComponent extends React.Component<IPatientListProps> {
    constructor(props: IPatientListProps) {
        super(props);

        this._openPatient = this._openPatient.bind(this);
    }

    _openPatient = (patient) => {
        this.props.onOpenPatient(patient);
    };

    render() {
        const patients = this.props.data;

        return (
            <Container>
                <HeaderRow><HeaderCell>Number</HeaderCell><HeaderCell>Patient Name</HeaderCell><HeaderCell>Age</HeaderCell></HeaderRow>
                {patients.map((patient) => 
                    <BodyRow key={patient.id}>
                        <BodyCell>{patient.number}</BodyCell><BodyCell>{patient.name}</BodyCell><BodyCell>{patient.age}</BodyCell>
                    </BodyRow>
                )}
            </Container>
        );
    }
}

export default PatientListComponent;
