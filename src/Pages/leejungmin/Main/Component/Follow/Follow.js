import React, { Component } from "react";
import "./Follow.scss";

class Follow extends Component {
  constructor() {
    super();
    this.state = {
      isFollowed: false,
    };
  }

  //   follow On Off
  followBtn = () => {
    const { isFollowed } = this.state;
    const followActive = !isFollowed;

    this.setState({
      isFollowed: followActive,
    });
  };

  render() {
    const { followRecom } = this.props;
    const { isFollowed } = this.state;

    return (
      <div className="friend_recommend">
        <div className="recommend_left">
          <img src={followRecom.followImg} alt="friend_recommend" />
          <div className="recommend_profile_nametag">
            <span>{followRecom.followName}</span>
            <span>{followRecom.followText}</span>
          </div>
        </div>
        <div className="recommend_right">
          <span
            className={!isFollowed ? "follow" : "following"}
            onClick={this.followBtn}
          >
            {!isFollowed ? "팔로우" : "팔로윙"}
          </span>
        </div>
      </div>
    );
  }
}

export default Follow;
