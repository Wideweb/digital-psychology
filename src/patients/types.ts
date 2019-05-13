export class PatientListItem {
    id: number;
    name: string;
}

export interface PatientsState {
    isLoading: boolean,
    isFail: boolean,
    error: any,
    data: Array<PatientListItem>,
}
