import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { theme } from './AppStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import StartScreen from './components/startscreen/StartScreen';
import UsersContainer from './components/users/UsersContainer';
import UserRunsContainer from './components/userRuns/UserRunsContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <CssBaseline />
            <Route path="/" exact component={StartScreen} />
            <Route path="/users" exact component={UsersContainer} />
            <Route path="/users/:id" component={UserRunsContainer} />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
