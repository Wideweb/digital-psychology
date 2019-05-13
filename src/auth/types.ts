export class User {
    id: number;
    name: string;
}

export interface AuthState {
    isSignedIn: boolean,
    isLoading: boolean,
    user: User,
    accessToken: string,
    error: any,
    isReady: false,
}
