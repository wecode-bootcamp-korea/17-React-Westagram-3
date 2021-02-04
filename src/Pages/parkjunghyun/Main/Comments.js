import React, { Component } from 'react';
import './Comments.scss';

export default class Comments extends Component {
  deleteCmt = (e) => {
    e.target.parentNode.remove();
  };

  render() {
    const { text } = this.props;
    const { like } = this.props;
    const { changeImg } = this.props;

    return (
      <div className="Comments">
        <p className="newCmt">
          {text}
          <button onClick={this.deleteCmt}>삭제</button>
          <img
            src={
              like
                ? '/images/parkjunghyun/heartRed.png'
                : '/images/parkjunghyun/heart.png'
            }
            alt="heart"
            onClick={() => {
              changeImg(this.props.id);
            }}
          />
        </p>
      </div>
    );
  }
}
