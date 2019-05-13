import * as React from 'react';
import Webcam from '../assets/webcam.js';

interface ICameraComponentProps { }

class CameraComponent extends React.Component<ICameraComponentProps, {}> {

    _webcamElement: HTMLVideoElement;
    _webcam: Webcam;


    componentDidMount() {
        this._webcam = new Webcam(this._webcamElement);
        this._webcam.setup();
    }

    render() {
        return (
            <div>
                <video 
                    autoPlay 
                    playsinline 
                    muted 
                    width="250" 
                    height="250"
                    ref={c => (this._webcamElement = c)}>
                </video>
            </div>
        );
    }
}


export default CameraComponent;