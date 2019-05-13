import * as React from 'react';
import { connect } from 'react-redux';
import glamorous from 'glamorous';

export const Container = glamorous.div({
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
});


interface ILoginComponentProps {
}

interface ILoginComponentState {
    name: string,
    password: string
}

class LoginComponent extends React.Component<ILoginComponentProps, ILoginComponentState> {
    constructor(props: ILoginComponentProps) {
        super(props);

        this.state = {
            name: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        } as ILoginComponentState)
    }

    render() {
        return (
            <Container>
                <head>
                    Login
                </head>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label>Name:</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </li>
                        <li>
                            <label>Password:</label>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </li>
                    </ul>
                    <input type="submit" value="Submit" />
                </form>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);