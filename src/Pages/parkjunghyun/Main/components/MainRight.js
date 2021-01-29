import React, { Component } from 'react';
import './MainRight.scss';

export default class MainRight extends Component {
  render() {
    return (
      <aside className="mainRight">
        <div id="rightProfile">
          <img alt="profile" src="images/parkjunghyun/profile.jpeg" />
          <div id="rightProfileText">
            <b>spjh2000 </b>
            <br />
            <span>박정현</span>
          </div>
          <div className="smblueText">전환</div>
        </div>
        <div className="recommand">
          <p>
            <span>
              <b>회원님을 위한 추천</b>
            </span>
            <span>모두보기</span>
          </p>
          <div className="recommandedFriend">
            <img src="images/parkjunghyun/profile.jpeg" alt="profile" />
            <div id="rightProfileText">
              <b>mardsdf </b>
              <br />
              <span>회원님을 위한 추천</span>
            </div>
            <div className="smblueText">팔로우</div>
          </div>
        </div>
      </aside>
    );
  }
}
