import React, { Component } from 'react';
import Feeds from './Feeds';

import './MainLeft.scss';

class MainLeft extends Component {
  render() {
    return (
      <section className="mainLeft">
        <section className="profiles">
          <div className="profile">
            <img src="images/parkjunghyun/profile.jpeg" alt="profile" />
            <div className="name">박정현</div>
          </div>
        </section>
        <Feeds />
      </section>
    );
  }
}

export default MainLeft;
