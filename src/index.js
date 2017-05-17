import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import './Stylesheets/css/Index.css';

ReactDOM.render(
    <MuiThemeProvider>
  <App dataUrl="https://davidemaser.github.io/data/temp-systemic.json" />
    </MuiThemeProvider>,
  document.getElementById('root')
);
