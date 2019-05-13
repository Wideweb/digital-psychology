import { User } from '../types';

export async function signInAsync(): Promise<string> {
	return Promise.resolve('123456677');
}

export async function getUserInfoAsync(accessToken: String): Promise<User> {
    let user: User = { id: 1, name: 'Alex' };
    return Promise.resolve(user);
}