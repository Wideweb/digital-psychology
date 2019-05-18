import { Patient, PatientCall, PatientMessage, PatientHeartRate} from '../types';

const ONE_DAY = 86400000;
const ONE_HOUR = 60 * 60;

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
        { date: Date.now() - ONE_DAY * 12, num: 30 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 11, num: 20 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 10, num: 3 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 9, num: 21 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 8, num: 10 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 7, num: 10 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 6, num: 40 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 5, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 4, num: 0 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 3, num: 5 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 2, num: 3 } as PatientMessage,
        { date: Date.now() - ONE_DAY * 1, num: 1 } as PatientMessage,
	],
	heartRate: [],
} as Patient

export async function getPatientAsync(): Promise<Patient> {
	patient.heartRate = [...Array(1000).keys()]
		.reverse()
		.map(x => ({ 
			date: Date.now() - 60 * 1000 * x, 
			num: Math.random() * (80 - 60) + 60, 
		}) as PatientHeartRate);
    return Promise.resolve(patient);
}