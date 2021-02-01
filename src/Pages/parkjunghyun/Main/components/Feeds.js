import React, { Component } from 'react';
import Comments from '../Comments';
import './MainLeft.scss';
import './Feeds.scss';

export default class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      commentValue: '',
    };

    this.addPost = this.addPost.bind(this);
    this.handleCommentValue = this.handleCommentValue.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          comments: data,
        });
      });
  }

  handleCommentValue(e) {
    this.setState({
      commentValue: e.target.value,
    });
  }

  addPost = (e) => {
    e.preventDefault();

    const { comments, commentValue } = this.state;

    this.setState({
      comments: [
        ...comments,
        {
          id: comments.length + 1,
          userName: 'wecode',
          content: commentValue,
          isLiked: false,
        },
      ],
    });
    e.target[0].value = '';
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
            onChange={this.handleCommentValue}
          />
          <button id="post">게시</button>
        </form>
        {this.state.comments.map((comment) => {
          return (
            <Comments
              key={comment.id}
              text={comment.content}
              like={comment.isLiked}
            />
          );
        })}
      </article>
    );
  }
}
