import React, { Component } from 'react';
import './Comments.scss';

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      imgSrcUnliked: '/images/parkjunghyun/heart.png',
      imgSrcliked: '/images/parkjunghyun/heartRed.png',
    };

    this.changeImg = this.changeImg.bind(this);
    this.deleteCmt = this.deleteCmt.bind(this);
  }

  changeImg = (e) => {
    // localhost 부분 생략할 수 있는 방법?
    if (
      e.target.src === 'http://localhost:3000/images/parkjunghyun/heart.png'
    ) {
      e.target.src = this.state.imgSrcliked;
    } else {
      e.target.src = this.state.imgSrcUnliked;
    }
  };

  deleteCmt = (e) => {
    e.target.parentNode.remove();
  };

  render() {
    return (
      <div>
        <p className="newCmt">
          {this.props.text}
          <button onClick={this.deleteCmt}>삭제</button>
          <img
            src={
              this.props.like
                ? this.state.imgSrcliked
                : this.state.imgSrcUnliked
            }
            alt={this.props.like ? 'Redheart' : 'heart'}
            onClick={this.changeImg}
          ></img>
        </p>
      </div>
    );
  }
}
