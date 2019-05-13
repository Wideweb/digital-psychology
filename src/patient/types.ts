export class Patient {
    id: number;
    name: string;
}

export interface PatientState {
    isLoading: boolean,
    isFail: boolean,
    error: any,
    data: Patient,
}
