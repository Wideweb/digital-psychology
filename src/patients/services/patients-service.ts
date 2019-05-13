import { PatientListItem } from '../types';

export async function getPatientsAsync(): Promise<Array<PatientListItem>> {
    let patients: Array<PatientListItem> = [
        { id: 1, name: 'Alex' } as PatientListItem,
        { id: 2, name: 'Dima' } as PatientListItem,
        { id: 3, name: 'John' } as PatientListItem
    ];

    return Promise.resolve(patients);
}