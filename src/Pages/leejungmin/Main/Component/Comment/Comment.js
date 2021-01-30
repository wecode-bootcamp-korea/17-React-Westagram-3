import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    const { newReplyAdd } = this.props;
    console.log(this.props.newReplyAdd);
    return (
      <div className="content_peed_text_reply">
        <div>
          <li>meeeeen93 {newReplyAdd}</li>
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
