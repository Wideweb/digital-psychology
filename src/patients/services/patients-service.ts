import { PatientListItem } from '../types';

export async function getPatientsAsync(): Promise<Array<PatientListItem>> {
    let patients: Array<PatientListItem> = [
        { id: 1, name: 'Alex' } as PatientListItem,
        { id: 2, name: 'Dima' } as PatientListItem,
        { id: 3, name: 'John' } as PatientListItem,
        { id: 4, name: 'John' } as PatientListItem,
        { id: 5, name: 'John' } as PatientListItem,
        { id: 6, name: 'John' } as PatientListItem,
        { id: 7, name: 'John' } as PatientListItem,
        { id: 8, name: 'John' } as PatientListItem,
        { id: 9, name: 'John' } as PatientListItem,
        { id: 10, name: 'John' } as PatientListItem,
        { id: 11, name: 'John' } as PatientListItem,
        { id: 12, name: 'John' } as PatientListItem,
        { id: 13, name: 'John' } as PatientListItem,
    ];

    return Promise.resolve(patients);
}