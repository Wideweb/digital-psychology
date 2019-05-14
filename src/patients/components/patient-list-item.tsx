import * as React from 'react';
import { PatientListItem } from '../types';

interface IPatientListItemProps {
    data: PatientListItem;
    onOpen: Function;
}

export default class PatientListItemComponent extends React.Component<IPatientListItemProps, {}> {
    constructor(props: IPatientListItemProps) {
        super(props);

        this._open = this._open.bind(this);
    }

    _open = () => {
        this.props.onOpen(this.props.data);
    };

    render() {
        return (
            <div onClick={this._open}>{this.props.data.name}</div>
        );
    }
}
