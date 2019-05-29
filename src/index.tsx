import * as React from 'react';
import * as ReactDOM from 'react-dom';
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

import App from './app';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html, body, #index {
        min-width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: Arial;
    }
    a {
        text-decoration: none;
        color: darkcyan;
        font-size: 15px;
    }
`;

const Index = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <App />
        </React.Fragment>
    );
};

ReactDOM.render(<Index />, document.getElementById('index'));