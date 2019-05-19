import { PatientListItem } from '../types';

export async function getPatientsAsync(): Promise<Array<PatientListItem>> {
    let patients: Array<PatientListItem> = [
        { id: '1', number: 1, name: 'William', age: 31, sex: 'Male', mentalState: '-' } as PatientListItem,
        { id: '2', number: 2, name: 'Michael', age: 18, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '3', number: 3, name: 'Sophia', age: 23, sex: 'Female', mentalState: '-' } as PatientListItem,
        { id: '4', number: 4, name: 'Alexander', age: 27, sex: 'Male', mentalState: '-' } as PatientListItem,
        { id: '5', number: 5, name: 'Aiden', age: 25, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '6', number: 6, name: 'Olivia', age: 21, sex: 'Female', mentalState: '-' } as PatientListItem,
        { id: '7', number: 7, name: 'Emily', age: 23, sex: 'Female', mentalState: '-' } as PatientListItem,
        { id: '8', number: 8, name: 'Liam', age: 32, sex: 'Male', mentalState: '-' } as PatientListItem,
        { id: '9', number: 9, name: 'Lily', age: 33, sex: 'Female', mentalState: '-' } as PatientListItem,
        { id: '10', number: 10, name: 'John', age: 32, sex: 'Male', mentalState: '-' } as PatientListItem,
        { id: '11', number: 11, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '12', number: 12, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '13', number: 13, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '14', number: 14, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '15', number: 14, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '16', number: 16, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '17', number: 17, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
        { id: '18', number: 18, name: 'John', age: 32, sex: 'Male', mentalState: 'Depression' } as PatientListItem,
    ];

    return Promise.resolve(patients);
}