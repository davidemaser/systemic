import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import './Stylesheets/css/Index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
  <App dataUrl="https://davidemaser.github.io/data/temp-systemic.json" defaultView="mailOverview" />
    </MuiThemeProvider>,
  document.getElementById('root')
);
