export class PatientCall {
    num: number;
    date: number;
}

export class PatientMessage {
    num: number;
    date: number;
}

export class PatientHeartRate {
	num: number;
    date: number;
}

export class PatientLocation {
    title: string;
    coordinates: Array<number>;
    from: Date;
    to: Date;
}

export class Patient {
    id: number;
    name: string;
	img: string;
	age: number;
    mentalState: string;
    
    country: string;
    preferredLanguage: string;
    address1: string;
    address2: string;
    city: string;
    zip: string;
    email: string;
    diagnosis: string;
    diagnosisDate: Date;
	
    calls: Array<PatientCall>;
	messages: Array<PatientMessage>;
	heartRate: Array<PatientHeartRate>;
	gps: Array<PatientLocation>;

    constructor() {
        this.calls = [];
        this.messages = [];
        this.gps = [];
    }
}

export interface PatientState {
    isLoading: boolean,
    isFail: boolean,
    error: any,
    data: Patient,
}
