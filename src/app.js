import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/navbar';

const App = () => (
  <MuiThemeProvider>
    <NavBar />
  </MuiThemeProvider>
);

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(
    <App />,
    document.getElementById('app')
    );
});