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

export class Patient {
    id: number;
    name: string;
    calls: Array<PatientCall>;
	messages: Array<PatientMessage>;
	heartRate: Array<PatientHeartRate>;

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
