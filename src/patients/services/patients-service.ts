import { PatientListItem } from '../types';

export async function getPatientsAsync(): Promise<Array<PatientListItem>> {
    let patients: Array<PatientListItem> = [
        { id: '1', number: 1, name: 'Alex', age: 23 } as PatientListItem,
        { id: '2', number: 2, name: 'Dima', age: 23 } as PatientListItem,
        { id: '3', number: 3, name: 'John', age: 23 } as PatientListItem,
        { id: '4', number: 4, name: 'John', age: 23 } as PatientListItem,
        { id: '5', number: 5, name: 'John', age: 23 } as PatientListItem,
        { id: '6', number: 6, name: 'John', age: 23 } as PatientListItem,
        { id: '7', number: 7, name: 'John', age: 23 } as PatientListItem,
        { id: '8', number: 8, name: 'John', age: 32 } as PatientListItem,
        { id: '9', number: 9, name: 'John', age: 32 } as PatientListItem,
        { id: '10', number: 10, name: 'John', age: 32 } as PatientListItem,
        { id: '11', number: 11, name: 'John', age: 32 } as PatientListItem,
        { id: '12', number: 12, name: 'John', age: 32 } as PatientListItem,
        { id: '13', number: 13, name: 'John', age: 32 } as PatientListItem,
    ];

    return Promise.resolve(patients);
}