import React, { Component } from "react";
import "./Story.scss";

class Story extends Component {
  render() {
    const { storyData } = this.props;
    return (
      <div className="story">
        <div className="story_border" value={storyData.index}>
          <img src={storyData.storyImg} alt="스토리1번" />
        </div>
        <span>{storyData.storyName}</span>
      </div>
    );
  }
}

export default Story;
