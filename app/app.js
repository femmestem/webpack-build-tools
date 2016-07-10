import React from 'react';
import { render } from 'react-dom';
import Greeting from './js/greeting';

render(
    <Greeting name='World'/>,
    document.getElementById('app')
);