import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import EmployeeInputForm from './components/EmployeeInputForm/EmployeeInputForm';
import { toEmployeeInputForm } from './constants/routes';
import store from './store/store';
import history from './history/history';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="container">
        <Route exact path="/" component={App} />
        <Route path={toEmployeeInputForm} component={EmployeeInputForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
