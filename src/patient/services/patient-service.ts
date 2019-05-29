import { Patient, PatientCall, PatientMessage, PatientHeartRate, PatientLocation } from '../types';

const ONE_DAY = 86400000;
const ONE_HOUR = 60 * 60;

const patient = {
    id: 1,
    name: 'Michael',
    age: 18,

    country: 'Belarus',
    preferredLanguage: 'Russian',
    address1: 'Timoshenko 12/91',
    address2: 'Kupriyanova 7',
    city: 'Minsk',
    zip: '220040',
    email: 'alckevich@live.com',
    diagnosis: 'Depression',
    diagnosisDate: new Date(2019, 4, 17),

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
        {
            title: 'Home',
            coordinates: [53.899414, 27.523096],
            from: new Date(2019, 4, 17, 19, 25),
            to: null,
        } as PatientLocation,
        {
            title: 'Shop',
            coordinates: [53.908018, 27.527318],
            from: new Date(2019, 4, 17, 18, 40),
            to: new Date(2019, 4, 17, 19, 10),
        } as PatientLocation,
        {
            title: 'Work',
            coordinates: [53.904278, 27.532528],
            from: new Date(2019, 4, 17, 10, 0),
            to: new Date(2019, 4, 17, 18, 30),
        } as PatientLocation,
        {
            title: 'Home',
            coordinates: [53.899414, 27.523096],
            from: new Date(2019, 4, 16, 18, 50),
            to: new Date(2019, 4, 17, 9, 40),
        } as PatientLocation,
        {
            title: 'Work',
            coordinates: [53.904278, 27.532528],
            from: new Date(2019, 4, 16, 10, 0),
            to: new Date(2019, 4, 16, 18, 30),
        } as PatientLocation,
        {
            title: 'Home',
            coordinates: [53.899414, 27.523096],
            from: new Date(2019, 4, 15, 18, 50),
            to: new Date(2019, 4, 16, 9, 40),
        } as PatientLocation,
        {
            title: 'Work',
            coordinates: [53.904278, 27.532528],
            from: new Date(2019, 4, 15, 10, 0),
            to: new Date(2019, 4, 15, 18, 30),
        } as PatientLocation,
        {
            title: 'Home',
            coordinates: [53.899414, 27.523096],
            from: new Date(2019, 4, 14, 19, 25),
            to: new Date(2019, 4, 15, 9, 40),
        } as PatientLocation,
        {
            title: 'Shop',
            coordinates: [53.908018, 27.527318],
            from: new Date(2019, 4, 14, 18, 40),
            to: new Date(2019, 4, 14, 19, 10),
        } as PatientLocation,
        {
            title: 'Work',
            coordinates: [53.904278, 27.532528],
            from: new Date(2019, 4, 14, 10, 0),
            to: new Date(2019, 4, 14, 18, 30),
        } as PatientLocation,
        {
            title: 'Home',
            coordinates: [53.899414, 27.523096],
            from: new Date(2019, 4, 14, 18, 50),
            to: new Date(2019, 4, 13, 9, 40),
        } as PatientLocation,
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