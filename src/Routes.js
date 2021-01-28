import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//진석 컴포넌트
import LoginKwak from './Pages/kwakjinseok/Login/Login'
import MainKwak from './Pages/kwakjinseok/Main/Main'
//혜성 컴포넌트
import LoginHeo from './Pages/heohyesung/Login/Login'
import MainHeo from './Pages/heohyesung/Main/Main'
//정현 컴포넌트

import LoginPark from './Pages/parkjunghyun/Login/Login'
import MainPark from './Pages/parkjunghyun/Main/Main'
//정민 컴포넌트
import LoginLee from './Pages/leejungmin/Login/Login'
import MainLee from './Pages/leejungmin/Main/Main'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/loginKwak" component={LoginKwak} />
          <Route exact path="/mainKwak" component={MainKwak} />
          <Route exact path="/loginHeo" component={LoginHeo} />
          <Route exact path="/mainHeo" component={MainHeo} />
          <Route exact path="/loginPark" component={LoginPark} />
          <Route exact path="/mainPark" component={MainPark} />
          <Route exact path="/loginLee" component={LoginLee} />
          <Route exact path="/mainLee" component={MainLee} />
        </Switch>
      </Router>
    );
  }
}


