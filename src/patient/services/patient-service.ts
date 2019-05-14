import { Patient, PatientCall } from '../types';

const ONE_DAY = 86400000;

const patient = {
    id: 1,
    name: 'Alex',
    calls: [
        { date: Date.now() - ONE_DAY * 12, num: 3 } as PatientCall,
        { date: Date.now() - ONE_DAY * 11, num: 3 } as PatientCall,
        { date: Date.now() - ONE_DAY * 10, num: 3 } as PatientCall,
        { date: Date.now() - ONE_DAY * 9, num: 3 } as PatientCall,
        { date: Date.now() - ONE_DAY * 8, num: 3 } as PatientCall,
        { date: Date.now() - ONE_DAY * 7, num: 10 } as PatientCall,
        { date: Date.now() - ONE_DAY * 6, num: 5 } as PatientCall,
        { date: Date.now() - ONE_DAY * 5, num: 1 } as PatientCall,
        { date: Date.now() - ONE_DAY * 4, num: 1 } as PatientCall,
        { date: Date.now() - ONE_DAY * 3, num: 1 } as PatientCall,
        { date: Date.now() - ONE_DAY * 2, num: 1 } as PatientCall,
        { date: Date.now() - ONE_DAY * 1, num: 1 } as PatientCall,
    ],
    messages: [
        { date: Date.now() - ONE_DAY * 12, num: 30 } as PatientCall,
        { date: Date.now() - ONE_DAY * 11, num: 20 } as PatientCall,
        { date: Date.now() - ONE_DAY * 10, num: 3 } as PatientCall,
        { date: Date.now() - ONE_DAY * 9, num: 21 } as PatientCall,
        { date: Date.now() - ONE_DAY * 8, num: 10 } as PatientCall,
        { date: Date.now() - ONE_DAY * 7, num: 10 } as PatientCall,
        { date: Date.now() - ONE_DAY * 6, num: 40 } as PatientCall,
        { date: Date.now() - ONE_DAY * 5, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 4, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 3, num: 5 } as PatientCall,
        { date: Date.now() - ONE_DAY * 2, num: 3 } as PatientCall,
        { date: Date.now() - ONE_DAY * 1, num: 1 } as PatientCall,
    ],
} as Patient

export async function getPatientAsync(): Promise<Patient> {
    return Promise.resolve(patient);
}