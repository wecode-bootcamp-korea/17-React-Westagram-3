import React, { Component } from 'react';
import './Comments.scss';

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      imgSrc: '/images/parkjunghyun/heart.png',
    };
    this.changeImg = this.changeImg.bind(this);
    this.deleteCmt = this.deleteCmt.bind(this);
  }

  changeImg = () => {
    if (!this.state.isLiked) {
      this.setState({
        imgSrc: '/images/parkjunghyun/heartRed.png',
        isLiked: true,
      });
    } else {
      this.setState({
        imgSrc: '/images/parkjunghyun/heart.png',
        isLiked: false,
      });
    }
  };

  deleteCmt(e) {
    e.target.parentNode.remove();
  }

  render() {
    return (
      <div>
        <p className="newCmt">
          {this.props.text}
          <button onClick={this.deleteCmt}>삭제</button>
          <img
            src={this.state.imgSrc}
            alt="heart"
            onClick={this.changeImg}
          ></img>
        </p>
      </div>
    );
  }
}
