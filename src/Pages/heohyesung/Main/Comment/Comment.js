import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div>
        <span className="feeduser">2929_9999</span>
        <span>{this.props.commentText}</span>
      </div>
    );
  }
}

export default Comment;