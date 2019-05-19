export class PatientListItem {
    id: string;
    number: number;
    name: string;
	age: number
	sex: string;
	mentalState: string;
}

export interface PatientsState {
    isLoading: boolean,
    isFail: boolean,
    error: any,
    data: Array<PatientListItem>,
}
