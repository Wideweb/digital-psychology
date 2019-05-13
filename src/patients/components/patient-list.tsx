import * as React from 'react';
import { PatientListItem } from '../types';
import PatientListItemComponent from './patient-list-item';

interface IPatientListProps {
    data: Array<PatientListItem>;
    onOpenPatient: Function;
}

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
            <ul>
                {patients.map((patient) => 
                    <li key={patient.id}><PatientListItemComponent data={patient} onOpen={patient => this._openPatient(patient)}/></li>
                )}
            </ul>
        );
    }
}

export default PatientListComponent;
