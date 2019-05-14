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
    display: flex;
    flex-direction: column;
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
                {patients.map((patient) => 
                    <PatientListItemComponent key={patient.id} data={patient} onOpen={patient => this._openPatient(patient)}/>
                )}
            </Container>
        );
    }
}

export default PatientListComponent;
