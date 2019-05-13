import * as React from 'react';
import { connect } from 'react-redux';
import WebcamCapture from '../../common/components/webcam-capture.component';
import { detect } from '../reducers/emotions';
import { IEmotion } from '../types';

interface IEmotionsDetectProps {
    emotion: IEmotion;
    detect: Function;
}

interface IEmotionsDetectState { }

class EmotionsDetectComponent extends React.Component<IEmotionsDetectProps, IEmotionsDetectState> {
    constructor(props: IEmotionsDetectProps) {
        super(props);

        this.detect = this.detect.bind(this);
    }

    detect(image) {
        this.props.detect(image);
    }

    render() {
        return (
            <div className="emotions emotions-detect">
                <h1>Take a picture to let us know how you feel about our service</h1>
                <WebcamCapture onCapture={this.detect}>Get Emotion</WebcamCapture>
                <h1>{this.props.emotion}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        emotion: state.emotions.emotion,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        detect: (image: string) => dispatch(detect(image)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmotionsDetectComponent);