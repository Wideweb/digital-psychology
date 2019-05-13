import { Patient } from '../types';

export async function getPatientAsync(): Promise<Patient> {
    return Promise.resolve({ id: 1, name: 'Alex' } as Patient);
}