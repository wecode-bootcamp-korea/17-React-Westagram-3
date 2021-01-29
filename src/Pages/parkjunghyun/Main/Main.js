import React, { Component } from 'react';
import Nav from '../../../Components/Nav/Nav';
import MainLeft from './components/MainLeft';
import MainRight from './components/MainRight';

import '../../../Styles/common.scss';
import './Main.scss';

class MainPark extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  render() {
    return (
      <>
        <Nav />
        <div className="main">
          <MainLeft comments={this.state.comments} />
          <MainRight />
        </div>
      </>
    );
  }
}

export default MainPark;
