import React from 'react';
import ReactDom from 'react-dom';

import '@styles/main.scss';
import { StylesProvider } from '@material-ui/core/styles';
import App from '@pages/Home';

const container = document.querySelector('#app');

ReactDom.render(
    <StylesProvider>
        <App />
    </StylesProvider>,
    container
);