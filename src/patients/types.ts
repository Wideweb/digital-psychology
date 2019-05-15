export class PatientListItem {
    id: string;
    number: number;
    name: string;
    age: number
}

export interface PatientsState {
    isLoading: boolean,
    isFail: boolean,
    error: any,
    data: Array<PatientListItem>,
}
