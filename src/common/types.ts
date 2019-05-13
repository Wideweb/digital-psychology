export class Action<T> {
    type: string;
    payload: T;

    constructor(type, payload) {
        this.type = type;
        this.payload = payload;
    }
}
