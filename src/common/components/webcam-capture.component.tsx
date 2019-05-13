import * as React from 'react';
import Webcam from 'react-webcam';

interface IWebcamCaptureProps {
    onCapture: Function;
}

export default class WebcamCapture extends React.Component<IWebcamCaptureProps, {}> {

    _webcam: any;

    constructor(props: IWebcamCaptureProps) {
        super(props);

        this.setRef = this.setRef.bind(this);
        this.capture = this.capture.bind(this);
    }

    setRef(webcam) {
        this._webcam = webcam;
    };

    capture() {
        const image = this._webcam.getScreenshot();
        this.props.onCapture(image);
    };

    render() {
        const videoConstraints = {
            width: 1280,
            height: 720,
            facingMode: "user"
        };

        return (
            <div>
                <Webcam
                    audio={false}
                    height={350}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={350}
                    videoConstraints={videoConstraints}
                />
                <button onClick={this.capture}>{this.props.children}</button>
            </div>
        );
    }
}