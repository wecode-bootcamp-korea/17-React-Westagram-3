import React, { Component } from 'react';
import './Feed.scss';

export default class Feed extends Component {
  render() {
    return (
      <div className="Feed">
        <div className="author">
          <img alt="profile" src={this.props.authorImgSrc} />
          <div className="authorText">
            <div id="authorName">
              <b>{this.props.authorName}</b>
            </div>
            <div id="location">{this.props.authorLocation}</div>
          </div>
          <img alt="more" id="more" src="images/parkjunghyun/more.png" />
        </div>
        <img className="mainImg" alt="instaImg" src={this.props.mainImgSrc} />
        <div className="feedIcons">
          <img alt="like" src="images/parkjunghyun/heart.png" />
          <img alt="msgbubble" src="images/parkjunghyun/msgbubble.png" />
          <img alt="sendicon" src="images/parkjunghyun/send.png" />
          <img alt="bookmark" src="images/parkjunghyun/bookmark.png" />
        </div>
        <div id="likes">
          <b>좋아요 4개</b>
        </div>
        <div id="comment">
          <b>{this.props.commentAuthor} |</b>
          <a href="www.google.com">{this.props.commentHash}..</a>
        </div>
        <div id="writeTime">{this.props.commentTime}</div>
        <form className="writeCmt" onSubmit={this.props.addPost}>
          <input
            type="text"
            className="postingCmt"
            placeholder="댓글 달기..."
            onChange={this.props.handleCommentValue}
          />
          <button id="post">게시</button>
        </form>
      </div>
    );
  }
}
