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
	lat: number;
    lng: number;
}

export class Patient {
    id: number;
	name: string;
	img: string;
	age: number;
	mentalState: string;
    calls: Array<PatientCall>;
	messages: Array<PatientMessage>;
	heartRate: Array<PatientHeartRate>;
	gps: Array<PatientLocation>;

    constructor() {
        this.calls = [];
        this.messages = [];
    }
}

export interface PatientState {
    isLoading: boolean,
    isFail: boolean,
    error: any,
    data: Patient,
}
