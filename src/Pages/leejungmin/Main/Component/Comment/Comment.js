import React, { Component } from "react";
import "./Comment.scss";
// import "./Main.scss";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      isReplyLike: false,
      isReplyDelete: false,
    };
  }

  // Comment Delete
  replyDelete = () => {
    this.setState({
      isReplyDelete: !this.state.isReplyDelete,
    });
  };

  // Comment Like
  replyLikeUp = () => {
    this.setState({
      isReplyLike: !this.state.isReplyLike,
    });
  };

  render() {
    const { newReplyAdd } = this.props;
    const { isReplyDelete, isReplyLike } = this.state;

    return (
      <div
        className={
          isReplyDelete
            ? "content_peed_text_reply reply_remove"
            : "content_peed_text_reply"
        }
      >
        <div>
          <li>
            <span>{newReplyAdd.commentName}</span>
            <span>{newReplyAdd.commentContent}</span>
          </li>
        </div>
        <div>
          <i
            className={
              isReplyLike ? "fas fa-heart likeit_change" : "fas fa-heart"
            }
            onClick={this.replyLikeUp}
          ></i>
          <i className="far fa-trash-alt" onClick={this.replyDelete}></i>
        </div>
      </div>
    );
  }
}

export default Comment;
