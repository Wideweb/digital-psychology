import { IEmotion } from '../types';

export const EMOTIONS_DETECT = 'renter/emotions/detect';
export const EMOTIONS_TRAIN = 'renter/emotions/train';

export const initState = {
    emotions: [
        { id: '1', description: 'Angry' } as IEmotion,
        { id: '2', description: 'Happy' } as IEmotion,
    ],
    emotion: '1'
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case EMOTIONS_DETECT:
            return { ...state };
        case EMOTIONS_TRAIN:
            return { ...state };
        default:
            return state;
    }
}

export const detect = (image) => async dispatch => {
    console.log(image);
    dispatch({ type: EMOTIONS_DETECT });
}

export const train = (image: string, emotion: string) => async dispatch => {
    console.log(image);
    console.log(emotion);
    dispatch({ type: EMOTIONS_TRAIN });
}
