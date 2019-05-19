import { Patient, PatientCall, PatientMessage, PatientHeartRate, PatientLocation} from '../types';

const ONE_DAY = 86400000;
const ONE_HOUR = 60 * 60;

const patient = {
    id: 1,
	name: 'Michael',
	age: 18,
	mentalState: 'Depression',
    calls: [
        { date: Date.now() - ONE_DAY * 12, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 11, num: 1 } as PatientCall,
        { date: Date.now() - ONE_DAY * 10, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 9, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 8, num: 2 } as PatientCall,
        { date: Date.now() - ONE_DAY * 7, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 6, num: 1 } as PatientCall,
        { date: Date.now() - ONE_DAY * 5, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 4, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 3, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 2, num: 0 } as PatientCall,
        { date: Date.now() - ONE_DAY * 1, num: 1 } as PatientCall,
    ],
    messages: [
        { date: Date.now() - ONE_DAY * 12, num: 2 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 11, num: 1 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 10, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 9, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 8, num: 1 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 7, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 6, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 5, num: 1 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 4, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 3, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 2, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 1, num: 0 } as PatientMessage,
	],
	gps: [
		{ lat: 59.95, lng: 30.33 } as PatientLocation, 
	],
} as Patient

export async function getPatientAsync(): Promise<Patient> {
	patient.heartRate = [...Array(3000).keys()]
		.reverse()
		.map(x => ({ 
			date: Date.now() - 60 * 1000 * x, 
			num: Math.random() * (80 - 60) + 60, 
		}) as PatientHeartRate);
    return Promise.resolve(patient);
}