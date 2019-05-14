import * as React from 'react';
import { PatientListItem } from '../types';
import styled from 'styled-components';

interface IPatientListItemProps {
    data: PatientListItem;
    onOpen: Function;
}

const Constainer = styled.div`
    box-sizing: border-box;
    padding: 20px;
`;

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
            <Constainer onClick={this._open}>{this.props.data.name}</Constainer>
        );
    }
}
