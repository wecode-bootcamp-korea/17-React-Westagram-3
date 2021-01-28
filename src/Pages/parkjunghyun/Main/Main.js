import React, { Component } from 'react';
import '../../../Styles/common.scss';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';

import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';

class MainPark extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <div className="main">
          <MainLeft></MainLeft>
          <MainRight></MainRight>
        </div>
      </>
    );
  }
}

export default MainPark;
