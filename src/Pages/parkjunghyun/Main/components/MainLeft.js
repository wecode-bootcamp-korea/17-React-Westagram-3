import React, { Component } from 'react';
import Feeds from './Feeds';

import './MainLeft.scss';

class MainLeft extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }
  render() {
    return (
      <section className="mainLeft">
        <section className="profiles">
          <div className="profile">
            <img src="images/parkjunghyun/profile.jpeg" alt="profile" />
            <div className="name">asdf</div>
          </div>
        </section>
        <Feeds comments={this.state.comments} />
      </section>
    );
  }
}

export default MainLeft;
