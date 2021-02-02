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
    if (!this.state.isReplyDelete) {
      this.setState({
        isReplyDelete: true,
      });
    }
  };
  // Comment Like

  replyLikeUp = () => {
    if (!this.state.isReplyLike) {
      this.setState({
        isReplyLike: true,
      });
    } else {
      this.setState({
        isReplyLike: false,
      });
    }
  };

  render() {
    const { newReplyAdd } = this.props;
    return (
      <div
        className={
          this.state.isReplyDelete
            ? "content_peed_text_reply reply_remove"
            : "content_peed_text_reply"
        }
      >
        <div>
          {/* <li>{"meeeeen93 " + newReplyAdd}</li> */}
          <li>
            {newReplyAdd.commentName} {newReplyAdd.commentContent}
          </li>
        </div>
        <div>
          <i
            className={
              this.state.isReplyLike
                ? "fas fa-heart likeit_change"
                : "fas fa-heart"
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
