import React, { Component } from 'react';
import Comments from '../Comments';
import './MainLeft.scss';
import './Feeds.scss';

export default class Feeds extends Component {
  constructor() {
    super();
    this.addPost = this.addPost.bind(this);
    this.state = {
      isNewData: false,
    };
  }

  addPost = (e) => {
    e.preventDefault();
    this.props.comments.unshift(e.target[0].value);
    console.log(this.props.comments);
    this.setState({
      isNewData: true,
    });
  };
  render() {
    return (
      <article className="feeds">
        <div className="author">
          <img alt="profile" src="images/parkjunghyun/profile.jpeg" />
          <div className="authorText">
            <div id="authorName">
              <b>gongganlog</b>
            </div>
            <div id="location">경주</div>
          </div>
          <img alt="more" id="more" src="images/parkjunghyun/more.png" />
        </div>
        <img alt="instaImg" src="images/parkjunghyun/instaImg.png" />
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
          <b>gongganlog |</b>
          <a href="www.google.com">#경주전원주택..</a>
        </div>
        <div id="writeTime">2분전</div>
        <form className="writeCmt" onSubmit={this.addPost}>
          <input
            type="text"
            className="postingCmt"
            placeholder="댓글 달기..."
          />
          <button id="post">게시</button>
        </form>
        {this.props.comments.map((comment) => {
          return <Comments text={comment} />;
        })}
      </article>
    );
  }
}
