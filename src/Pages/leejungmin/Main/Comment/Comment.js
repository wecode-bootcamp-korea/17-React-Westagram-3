import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <div className="content_peed_text_reply">
        <div>
          <li>meeeeen93 {this.props.newReplyAdd}</li>
        </div>
        <div>
          <i className="far fa-heart reply_like"></i>
          <i className="far fa-trash-alt reply_remove"></i>
        </div>
      </div>
    );
  }
}

export default Comment;
