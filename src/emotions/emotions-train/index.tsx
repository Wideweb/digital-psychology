import * as React from 'react';
import { connect } from 'react-redux';
import WebcamCapture from '../../common/components/webcam-capture.component';
import { train } from '../reducers/emotions';
import { IEmotion } from '../types';

interface IEmotionsTrainProps {
    emotions: Array<IEmotion>;
    train: Function;
}

interface IEmotionsTrainState {
    emotion: string;
}

class EmotionsTrainComponent extends React.Component<IEmotionsTrainProps, IEmotionsTrainState> {
    constructor(props: IEmotionsTrainProps) {
        super(props);

        this.state = {
            emotion: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.train = this.train.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;

        this.setState({ emotion: value } as IEmotionsTrainState);
    }

    train(image) {
        this.props.train(image, this.state.emotion);
    }

    render() {
        return (
            <div className="emotions emotions-train">
                <h1>Take pictures that define your different moods in the dropdown</h1>
                <select value={this.state.emotion} onChange={this.handleChange}>
                    {this.props.emotions.map(emotion => <option key={emotion.id} value={emotion.id}>{emotion.description}</option>)};
                </select>
                <WebcamCapture onCapture={this.train}>Train Model</WebcamCapture>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emotions: state.emotions.emotions,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        train: (image: string, emotion: string) => dispatch(train(image, emotion)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmotionsTrainComponent);